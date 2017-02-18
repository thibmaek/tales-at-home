import React, { Component, PropTypes } from 'react';
import { View, StatusBar, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Loading, Families, Results, NewFamily } from 'src/containers/';
import { NavigationBar, Sidebar, ActionMenu  } from 'src/components/';

import { Database } from 'src/config/firebase';

import s from 'src/assets/styles/containers/Dashboard';
import sSidebar from 'src/assets/styles/components/Sidebar';

export default class Dashboard extends Component {
  constructor(props, context) {
    super(props, context);

    this.ref = Database.ref(`/families`);
    this.state = {};
  }

  componentDidMount() {
    this._getFamilies();
  }

  _getFamilies() {
    this.ref.once(`value`)
      .then(snap => {
        const families = [];
        snap.forEach(data => {
          families.push({ ...data.val(), key: data.key });
        });

        let selectedFamily = null;

        if (this.props.selectedFamily) {
          selectedFamily = this.props.selectedFamily;
        } else {
          const obj = families.filter(f => f.active)[0];
          obj && obj.hasOwnProperty(`key`)
            ? selectedFamily = obj.key
            : selectedFamily;
        }
        this.setState({ families, selectedFamily });
      })
      .catch(e => console.error(e));
  }

  _setSelectedFamily(selectedFamily) {
    this.setState({ selectedFamily });
  }

  _renderLoading () {
    setTimeout(() => {
      this.setState({
        noFamilies: true,
      });
    }, 10000);

    return (
      <Loading title='Families aan het ophalen…' />
    );
  }

  _renderSidebar() {
    const { noFamilies } = this.state;

    const NEUTRAL_TYPE = {
      type: `neutral`,
      text: `nieuw gezin aanmaken`,
      handler: Actions.dashboardScene_new,
    };

    return (
      !this.props.addFamily
        ? <Sidebar action={NEUTRAL_TYPE} style={s.sidebar}>
            { noFamilies
              ? <View style={s.noFamily}>
                  <Text style={s.noFamilyText}>Momenteel zijn er geen gezinnen</Text>
                </View>
              : <Families
                  style={sSidebar.children}
                  families={this.state.families}
                  selectedFamily={this.state.selectedFamily}
                  didSelectFamily={key => this._setSelectedFamily(key)}
                />
            }
          </Sidebar>
        : <Sidebar><NewFamily /></Sidebar>
    );
  }

  _renderView() {
    const { selectedFamily } = this.state;
    return (
      <View style={s.view}>
        { this._renderSidebar() }
        { this.props.dimmed ? <View style={s.dimmed}></View> : null }
        <Results selectedFamily={selectedFamily} />
        { selectedFamily ? <ActionMenu selectedFamily={selectedFamily} /> : null }
      </View>
    );
  }

  render() {
    return (
      <View style={s.container}>
        <StatusBar hidden={true} />
        <NavigationBar title='Dashboard' action='SEARCH' />
        { this.state.families  ? this._renderView() : this._renderLoading() }
      </View>
    );
  }

  static propTypes = {
    selectedFamily: PropTypes.string,
    dimmed: PropTypes.bool,
    addFamily: PropTypes.bool,
  }
}
