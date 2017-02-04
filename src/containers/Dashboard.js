import React, { Component, PropTypes } from 'react';
import { View, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Database } from 'src/config/firebase';

import { Loading, Families, Results, NewFamily } from 'src/containers/';
import { NavigationBar, Sidebar, ActionButton, SessionItem } from 'src/components/';

import s from 'src/assets/styles/containers/Dashboard';
import { familyMembers, notes } from 'src/assets/mockedData';

export default class Dashboard extends Component {
  constructor(props, context) {
    super(props, context);

    this.familyRef = Database.ref(`/families`);
    this.sessionRef = Database.ref(`/sessions`);
    this.state = {
      families: null,
      sessions: null,
    };
  }

  componentDidMount() {
    this._getFamilies(this.familyRef);
    this._getSessionList(this.sessionRef);
  }

  _getFamilies(ref) {
    ref.on(`value`, snapshot => {
      const families = [];
      snapshot.forEach(data => {
        families.push(data.val());
      });

      this.setState({ families });
    });
  }

  _getSessionList(ref) {
    ref.once(`value`)
      .then(snapshot => {
        const sessions = [];
        snapshot.forEach(data => {
          sessions.push(data.val());
        });

        this.setState({ sessions });
      });
  }

  _renderLoading() {
    return (<Loading title='Families aan het ophalen…' />);
  }

  _renderSidebar() {
    const NEUTRAL_TYPE = {
      type: `neutral`,
      text: `nieuw gezin aanmaken`,
      handler: Actions.dashboardScene_new,
    };

    return (
      !this.props.addFamily
      ? <Sidebar action={NEUTRAL_TYPE}><Families families={this.state.families} /></Sidebar>
      : <Sidebar><NewFamily /></Sidebar>
    );
  }

  _renderView() {
    return (
      <View style={s.view}>
        {this._renderSidebar(true)}
        {this.props.dimmed ? <View style={s.dimmed}></View> : null}
        <Results familyMembers={familyMembers} notes={notes} />
        <ActionButton type='add'>
          {this.state.sessions
            ? this.state.sessions.map(session => <SessionItem key={session.key} {...session} />)
            : null
          }
        </ActionButton>
      </View>
    );
  }

  render() {
    return (
      <View style={s.container}>
        <StatusBar hidden={true} />
        <NavigationBar title='Dashboard' />
        { this.state.families ? this._renderView() : this._renderLoading() }
      </View>
    );
  }

  static propTypes = {
    dimmed: PropTypes.bool,
    addFamily: PropTypes.bool,
  }
}
