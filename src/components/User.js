import React, { Component, PropTypes } from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Alert } from 'src/components/';

import { Auth } from 'src/config/firebase';

import s from 'src/assets/styles/components/User';

const LOGOUT_ACTION = {
  title: `uitloggen`,
  func: () => Auth.signOut().then(Actions.rootScene),
};

export default class User extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      displayAlert: false,
    };
  }

  _toggleAlert() {
    this.setState({
      displayAlert: !this.state.displayAlert,
    });
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this._toggleAlert()}>
        {this.state.displayAlert
          ? <Alert title='Uitloggen' action={LOGOUT_ACTION} style={s.alert}>
              Door af te melden heb je geen toegang tot alle huidige sessies & resultaten.
              Ben je zeker dat je wilt doorgaan?
            </Alert>
          : null
        }
        <View style={s.container}>
          <Image source={this.props.imageURI} style={s.image} />
          <Text style={s.text}>{ this.props.name ? this.props.name : `Gastgebruiker` }</Text>
        </View>
      </TouchableOpacity>
    );
  }

  static defaultProps = {
    imageURI: require(`src/assets/img/icons/defaultUser.png`),
    name: `Gastgebruiker`,
  };

  static propTypes = {
    name: PropTypes.string,
    imageURI: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }
}
