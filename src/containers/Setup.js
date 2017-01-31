import React from 'react';
import { View, StatusBar } from 'react-native';

import Login from 'src/components/Login';

import s from 'src/assets/styles/containers/Setup';

export default () => (
  <View style={s.container}>
    <StatusBar hidden={true} />
    <View style={s.view}>
      <Login action='Bewerken' title='Aanmelden' />
    </View>
  </View>
);
