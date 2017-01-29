import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import NavigationBar from 'src/components/NavigationBar';
import Sidebar from 'src/components/Sidebar';

import s from 'src/assets/styles/containers/Dashboard';
import mockedUser from 'src/assets/img/mockedUser.jpg';

const families = [
  {
    key: 1,
    name: `Osman`,
    avatar: mockedUser,
  },
  {
    key: 2,
    name: `Osman`,
    avatar: mockedUser,
  },
  {
    key: 3,
    name: `Osman`,
    avatar: mockedUser,
  },
  {
    key: 4,
    name: `Osman`,
    avatar: mockedUser,
  },
  {
    key: 5,
    name: `Osman`,
    avatar: mockedUser,
  },
];

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
        </View>
      </View>
    );
  }
}
