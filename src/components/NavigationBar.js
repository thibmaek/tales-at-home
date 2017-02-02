import React, { PropTypes } from 'react';
import { View, Text, TextInput } from 'react-native';

import { User } from 'src/components/';

import s from 'src/assets/styles/components/NavigationBar';

const NavigationBar = ({ title }) => (
  <View style={s.navbar}>
    <View style={s.leftNav}>
      { title ? <Text style={s.title}>{title.toUpperCase()}</Text> : null }
      <TextInput style={s.input} placeholder='zoeken…' />
    </View>
    <User style={s.user} name='Celestine Verghaege' />
  </View>
);

NavigationBar.propTypes = {
  title: PropTypes.string,
};

export default NavigationBar;
