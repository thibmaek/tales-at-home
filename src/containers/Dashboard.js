import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import NavigationBar from '../components/NavigationBar';

import s from '../styles/Dashboard';

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
        <NavigationBar />
      </View>
    );
  }
}
