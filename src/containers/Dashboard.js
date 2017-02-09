import React, { Component, PropTypes } from 'react';
import { View, StatusBar, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Loading, Families, Results, NewFamily } from 'src/containers/';
import { NavigationBar, Sidebar, ActionMenu  } from 'src/components/';

import { Database } from 'src/config/firebase';

import s from 'src/assets/styles/containers/Dashboard';

export default class Dashboard extends Component {
  constructor(props, context) {
    super(props, context);

    this.ref = Database.ref(`/families`);
    this.state = {
      families: ``,
      search: ``,
    };
  }

  componentDidMount() {
    this._getFamilies();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ families: nextProps.families === this.state.families });
  }

  _getFamilies() {
    this.ref.once(`value`)
      .then(snap => {
        const families = [];
        snap.forEach(data => {
          families.push({ ...data.val(), key: data.key });
        });

        let selectedFamily = null;
        this.props.selectedFamily
          ? selectedFamily = this.props.selectedFamily
          : selectedFamily = families[0].key;

        this.setState({ families, selectedFamily });
      })
      .catch(e => console.error(e));
  }

  _setSelectedFamily(selectedFamily) {
    this.setState({ selectedFamily });
  }

  _updateSearch(search) {
    this.setState({
      families: this.state.families.filter(
        family => {
          return family.name.toLowerCase().indexOf(search.toLowerCase()) !== - 1;
        }
      ),
      search,
    });
  }

  _renderLoading = () => <Loading title='Families aan het ophalen…' />

  _renderSidebar() {
    const NEUTRAL_TYPE = {
      type: `neutral`,
      text: `nieuw gezin aanmaken`,
      handler: Actions.dashboardScene_new,
    };

    return (
      !this.props.addFamily
        ? <Sidebar action={NEUTRAL_TYPE}>
            <View style={s.searchContainer}>
              <TextInput style={s.input} placeholder='Zoek een gezin'
                value={this.state.search}
                onChangeText={search => this._updateSearch(search)}
              />
            </View>
            <Families
              families={this.state.families}
              selectedFamily={this.state.selectedFamily}
              didSelectFamily={key => this._setSelectedFamily(key)}
            />
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
        <ActionMenu selectedFamily={selectedFamily} />
      </View>
    );
  }

  render() {
    return (
      <View style={s.container}>
        <StatusBar hidden={true} />
        <NavigationBar title='Dashboard' action='SEARCH' />
        { this.state.families ? this._renderView() : this._renderLoading() }
      </View>
    );
  }

  static propTypes = {
    selectedFamily: PropTypes.string,
    dimmed: PropTypes.bool,
    addFamily: PropTypes.bool,
  }
}
