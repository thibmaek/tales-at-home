import React, { PropTypes } from 'react';
import { View, Text, TextInput } from 'react-native';

import User from './User';

import globalStyle from '../styles/GlobalStyle.js';
import mockedUser from '../assets/img/mockedUser.jpg';

const NavigationBar = ({ title }) => {
  return (
    <View style={s.navbar}>
      <View style={s.rightNav}>
        { title ? <Text style={[globalStyle, s.title]}>{title.toUpperCase()}</Text> : null }
        <TextInput value='zoeken…' style={[globalStyle, s.input]} />
      </View>
      <User style={s.user} name='Celestine Verghaege' imageURI={mockedUser} />
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
    flex: 1,
    fontSize: 20,
    fontWeight: `bold`,
  },
  input: {
    flex: 3,
    color: `rgba(220, 221, 225, 1)`,
  },
};

export default NavigationBar;
