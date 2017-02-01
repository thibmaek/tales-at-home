import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import { Database } from 'src/config/firebase';

import NavigationBar from 'src/components/NavigationBar';
import Loading from 'src/containers/Loading';
import Sidebar from 'src/components/Sidebar';
import Results from 'src/containers/Results';
import ActionButton from 'src/components/ActionButton';
import Alert from 'src/components/Alert';

import s from 'src/assets/styles/containers/Dashboard';
import { familyMembers, notes } from 'src/assets/mockedData';

export default class Dashboard extends Component {
  constructor(props, context) {
    super(props, context);

    this.ref = Database.ref(`/families/-KblImH1pkb5Ew9-Qg_h`);
    this.state = {
      families: null,
    };
  }

  componentDidMount() {
    this._getFamilies(this.ref);
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

  _renderLoading() {
    return (
      <Loading title='Families aan het ophalen…' />
    );
  }

  _renderView() {
    return (
      <View style={s.view}>
        <Sidebar families={this.state.families} />
        <Results familyMembers={familyMembers} notes={notes} />
        <ActionButton type='plus'></ActionButton>
      </View>
    );
  }

  render() {
    return (
      <View style={s.container}>
        <StatusBar hidden={true} />
        <NavigationBar title='Dashboard' />
        { this.state.families
          ? this._renderView()
          : this._renderLoading()
        }
      </View>
    );
  }
}
