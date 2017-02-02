import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import { Database } from 'src/config/firebase';

import NavigationBar from 'src/components/NavigationBar';
import Loading from 'src/containers/Loading';
import Sidebar from 'src/components/Sidebar';
import Results from 'src/containers/Results';
import ActionButton from 'src/components/ActionButton';
import SessionItem from 'src/components/SessionItem';

import s from 'src/assets/styles/containers/Dashboard';
import { familyMembers, notes } from 'src/assets/mockedData';

export default class Dashboard extends Component {
  constructor(props, context) {
    super(props, context);

    this.familyRef = Database.ref(`/families/-KblImH1pkb5Ew9-Qg_h`);
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
    return (
      <Loading title='Families aan het ophalen…' />
    );
  }

  _renderView() {
    const { families, sessions } = this.state;
    console.log(sessions);

    return (
      <View style={s.view}>
        <Sidebar families={families} />
        <Results familyMembers={familyMembers} notes={notes} />
        <ActionButton type='add'>
          {sessions
            ? sessions.map(session => <SessionItem key={session.key} {...session} />)
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
}
