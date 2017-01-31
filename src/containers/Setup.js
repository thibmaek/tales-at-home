import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import Login from 'src/components/Login';

import s from 'src/assets/styles/containers/Setup';

export default class Setup extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <View style={s.container}>
        <StatusBar hidden={true} />
        <View style={s.view}>
          <Login action='Bewerken' title='Aanmelden' />
        </View>
      </View>
    );
  }
}
