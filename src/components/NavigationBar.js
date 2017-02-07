import React, { PropTypes } from 'react';
import { View, Text, TextInput } from 'react-native';

import { User } from 'src/components/';

import { Auth } from 'src/config/firebase';

import s from 'src/assets/styles/components/NavigationBar';

const NavigationBar = ({ title }) => (
  <View style={s.navbar}>
    <View style={s.leftNav}>
      { title ? <Text style={s.title}>{title.toUpperCase()}</Text> : null }
      <TextInput style={s.input} placeholder='zoeken…' />
    </View>
    { Auth.currentUser ? <User style={s.user} name={Auth.currentUser.email} /> : null }
  </View>
);

NavigationBar.propTypes = {
  title: PropTypes.string,
};

export default NavigationBar;
