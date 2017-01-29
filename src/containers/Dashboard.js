import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import NavigationBar from 'src/components/NavigationBar';
import Sidebar from 'src/components/Sidebar';
import Results from 'src/containers/Results';

import s from 'src/assets/styles/containers/Dashboard';
import { families, familyMembers } from 'src/assets/mockedData';

export default class Dashboard extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      family: undefined,
    };
  }

  render() {
    return (
      <View style={s.container}>
        <StatusBar hidden={true} />
        <NavigationBar title='Dashboard' />
        <View style={s.view}>
          <Sidebar families={families} />
          <Results familyMembers={familyMembers} />
        </View>
      </View>
    );
  }
}
