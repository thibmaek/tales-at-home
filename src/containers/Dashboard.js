import React, { Component, PropTypes } from 'react';
import { View, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Loading, Families, Results, NewFamily } from 'src/containers/';
import { NavigationBar, Sidebar, ActionMenu  } from 'src/components/';

import { Database } from 'src/config/firebase';

import s from 'src/assets/styles/containers/Dashboard';

export default class Dashboard extends Component {
  constructor(props, context) {
    super(props, context);

    this.familyRef = Database.ref(`/families`);
    this.sessionRef = Database.ref(`/sessions`);
    this.state = {};
  }

  componentDidMount() {
    this._getFamilies(this.familyRef);
    this._getSessionList(this.sessionRef);
  }

  _getFamilies(ref) {
    ref.once(`value`).then(snap => {
      const families = [];
      snap.forEach(data => {
        families.push({ ...data.val(), key: data.key });
      });

      let selectedFamily = null;

      this.props.selectedFamily
        ? selectedFamily = this.props.selectedFamily
        : selectedFamily = families[0].key;

      const fam = families.filter(f => f.key === selectedFamily)[0];

      this.setState({
        families, selectedFamily,
        members: fam.members,
        notes: fam.notes,
      });
    });
  }

  _getSessionList(ref) {
    ref.once(`value`)
      .then(snap => {
        const sessionOptions = [];
        snap.forEach(data => {
          sessionOptions.push({ ...data.val(), key: data.key });
        });

        this.setState({ sessionOptions });
      });
  }

  _setSelectedFamily(selectedFamily) {
    const fam = this.state.families.filter(f => f.key === selectedFamily)[0];

    this.setState({
      selectedFamily,
      members: fam.members,
      notes: fam.notes,
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
    const { members, notes } = this.state;
    return (
      <View style={s.view}>
        { this._renderSidebar() }
        { this.props.dimmed ? <View style={s.dimmed}></View> : null }
        { members ? <Results members={members} notes={notes} /> : null }
        <ActionMenu sessionOptions={this.state.sessionOptions} />
      </View>
    );
  }

  render() {
    return (
      <View style={s.container}>
        <StatusBar hidden={true} />
        <NavigationBar title='Dashboard' />
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
