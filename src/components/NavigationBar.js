import React, { PropTypes } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { User } from 'src/components/';

import { Auth } from 'src/config/firebase';
import upperCase from 'src/lib/upperCaseString';

import s from 'src/assets/styles/components/NavigationBar';

const _getAction = (action, actionTitle) => {
  switch (action) {
  case `BACK`:
    return (
      <TouchableOpacity onPress={() => Actions.pop()}>
        <Text style={s.backTitle}>{ upperCase(actionTitle) }</Text>
      </TouchableOpacity>
    );
  case `BACKTOROOT`:
    return (
      <TouchableOpacity onPress={() => Actions.rootScene()}>
        <Text style={s.backTitle}>{ upperCase(actionTitle) }</Text>
      </TouchableOpacity>
    );
  case `REFRESH`:
    return (
      <TouchableOpacity onPress={() => Actions.refresh()}>
        <Text style={s.navigationAction}>♻︎</Text>
      </TouchableOpacity>
    );
  case `SEARCH`:
    return (<TextInput style={s.input} placeholder='zoeken…' />);
  default:
    return null;
  }
};

const NavigationBar = ({ transparent, title, action, actionTitle }) => (
  <View style={transparent ? s.transparentNavbar : s.navbar}>
    <View style={s.leftNav}>
      { title === `Dashboard`
        ? <Text style={s.title}>{ upperCase(title) }</Text>
        : null }
      { action ? _getAction(action, actionTitle) : null }
    </View>
    { title === `Dashboard` ? <User style={s.user} name={Auth.currentUser.email} /> : null }
  </View>
);

NavigationBar.propTypes = {
  transparent: PropTypes.bool,
  navigate: PropTypes.string,
  title: PropTypes.string,
  actionTitle: PropTypes.string,
  action: PropTypes.string,
};

export default NavigationBar;
