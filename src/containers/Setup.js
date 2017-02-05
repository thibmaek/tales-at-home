import React, { Component, PropTypes } from 'react';
import { View, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Auth } from 'src/config/firebase';

import { AuthType } from 'src/components/';

import s from 'src/assets/styles/containers/Setup';

export default class Setup extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    Auth.onAuthStateChanged(user => {
      if (user) Actions.dashboardScene();
    });
  }

  render() {
    const { action, title } = this.props.authType;

    return (
      <View style={s.container}>
        <StatusBar hidden={true} />
        <View style={s.view}>
          <AuthType action={action} title={title} {...this.props.authType} />
        </View>
      </View>
    );
  }

  static propTypes = {
    authType: PropTypes.object.isRequired,
  };
}
