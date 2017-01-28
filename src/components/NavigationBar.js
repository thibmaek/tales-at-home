import React, { PropTypes } from 'react';
import { View, Text, TextInput } from 'react-native';

import User from './User';

const NavigationBar = ({ title }) => {
  return (
    <View style={s.navbar}>
      <View style={s.rightNav}>
        { title ? <Text style={s.title}>{title}</Text> : null }
        <TextInput value='zoeken…' style={s.input} />
      </View>
      <User style={s.user}
        name='Thibault Maekelbergh'
        imageURI='https://secure.gravatar.com/avatar/ee5f9d49d43486e5dffad318c1e6199b?s=100'
      />
    </View>
  );
};

NavigationBar.propTypes = {
  title: PropTypes.string,
};

const s = {
  navbar: {
    flexDirection: `row`,
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: `center`,
    shadowColor: `black`,
    shadowOffset: { width: 2 },
    shadowOpacity: .09,
    shadowRadius: 4,
  },
  rightNav: {
    flexDirection: `row`,
    justifyContent: `space-around`,
    flex: 2,
  },
  title: {
    fontSize: 20,
    flex: 1,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: `rgba(220, 221, 225, 1)`,
  },
};

export default NavigationBar;
