import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';
import BlueToothCP from 'react-native-bluetooth-cross-platform';

import { Preloader } from 'src/components/';

import s from 'src/assets/styles/containers/Connect';

export default class Connect extends Component {
  constructor(props, context) {
    super(props, context);

    BlueToothCP.advertise(`WIFI`);
    this.state = {};
  }

  componentDidMount() {
    this._handleInvitations();
    this._handleMessaging();
  }

  _handleInvitations() {
    BlueToothCP.addInviteListener(({ id }) => BlueToothCP.acceptInvitation(id));
  }

  _handleMessaging() {
    BlueToothCP.addReceivedMessageListener(({ message }) => {
      this.setState({
        pin: parseInt(message),
      });
    });
  }

  _matchPin = input => {
    this.state.pin === input ? Actions.sessionSwiping() : null;
  };

  _renderInput() {
    return (
      <View>
        <View style={s.introContainer}>
          <Text style={s.intro}>
            Voer hier de code van de begeleider in om verder te gaan
          </Text>
        </View>
        <View style={s.inputContainer}>
          <TextInput
            style={s.input} keyboardType='numeric' placeholder='0000' returnKeyType='go'
            maxLength={4} onSubmitEditing={pin => this._matchPin(parseInt(pin))}
            onChangeText={pin => this._matchPin(parseInt(pin))}
          />
        </View>
      </View>
    );
  }

  _renderWaiting() {
    return (
      <View style={s.awaiting}>
        <Text style={s.intro}>Wachten op een nieuwe sessie…</Text>
        <Preloader size={64} />
      </View>
    );
  }

  render() {
    return (
      <LinearGradient colors={[`#008EFF`, `#00C8FF`]}  style={s.container}>
        <View style={s.titleContainer}>
          <Text style={s.title}>{`Voer de connectiepin in`.toUpperCase()}</Text>
        </View>
        { this.state.pin ? this._renderInput() : this._renderWaiting() }
      </LinearGradient>
    );
  }
}
