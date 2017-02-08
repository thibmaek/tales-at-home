import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import Button from 'apsl-react-native-button';

import { Auth } from 'src/config/firebase';
import capString from 'src/lib/capitalizeString';

import { white } from 'src/assets/styles/vars';
import s from 'src/assets/styles/components/AuthType';

const AUTH_LOGIN = { action: `inloggen`, title: `aanmelden`, method: `login` };

export default class AuthType extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  _handleSubmit(type) {
    const { email, password } = this.state;
    switch (type) {
    case `login`:
      return (
        Auth.signInWithEmailAndPassword(email, password)
          .catch(e => console.error(e.message))
      );
    case `anon`:
      return (
        Auth.signInAnonymously()
          .catch(e => console.error(e.message))
      );
    default:
      return (
          Auth.createUserWithEmailAndPassword(email, password)
            .catch(e => console.error(e.message))
      );
    }
  }

  render() {
    return (
      <LinearGradient colors={[`#008EFF`, `#00C8FF`]}  style={s.container}>
        <View style={s.loginContainer}>
          <View style={s.loginTitleContainer}>
            <Text style={s.title}>{ this.props.title.toUpperCase() }</Text>
          </View>
          <View style={s.loginFormContainer}>
            <View style={s.inputContainer}>
              <TextInput
                style={s.input}
                placeholder='Wat is je e-mail adres?'
                keyboardType='email-address'
                returnKeyType='next'
                placeholderTextColor={white}
                onChangeText={email => this.setState({ email })}
              />
            </View>
            <View style={s.inputContainer}>
              <TextInput
                style={s.input}
                secureTextEntry={true}
                placeholder='Wat is je wachtwoord?'
                placeholderTextColor={white}
                onChangeText={password => this.setState({ password })}
              />
            </View>
            <View>
              {this.props.action === `inloggen` ?
                <Button
                  style={s.button}
                  textStyle={s.buttonText}
                  onPress={() => this._handleSubmit(`login`)}
                >
                  { capString(this.props.action) }
                </Button>
                :
                <Button
                  style={s.button}
                  textStyle={s.buttonText}
                  onPress={() => this._handleSubmit(`register`)}
                >
                  { capString(this.props.action) }
                </Button>
              }

            </View>
            {this.props.action === `registreren` ?
              <Text style={s.textLink}
                onPress={() => Actions.setupScene({ authType: AUTH_LOGIN })}>
                Ik heb al een account
              </Text>
            : null }

          </View>
          <View style={s.anonLogin}>
            <Text style={s.underlineLink} onPress={() => this._handleSubmit(`anon`)}>
              Doorgaan zonder account
            </Text>
          </View>
        </View>
      </LinearGradient>
    );
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    method: PropTypes.string,
  }
}
