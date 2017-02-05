import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from 'apsl-react-native-button';

import { Auth } from 'src/config/firebase';

import capString from 'src/lib/capitalizeString';

import { white } from 'src/assets/styles/vars';
import s from 'src/assets/styles/components/AuthType';

export default class AuthType extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      email: null,
      password: null,
    };
  }

  _handleLogin(type) {
    const { email, password } = this.state;

    if (type === `anon`) {
      Auth.signInAnonymously()
        .catch(e => console.error(e.message));
    } else {
      Auth.signInWithEmailAndPassword(email, password)
        .catch(e => console.error(e.message));
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
              <Button
                style={s.button}
                textStyle={s.buttonText}
                onPress={() => this._handleLogin(`login`)}
              >
                { capString(this.props.action) }
              </Button>
            </View>
          </View>
          <View style={s.anonLogin}>
            <Text style={s.underlineLink} onPress={() => this._handleLogin(`anon`)}>
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
