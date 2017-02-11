import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';

import s from 'src/assets/styles/containers/Connect';

export default class Connect extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      pinCode: 8310,
    };
  }

  _matchPin = input => {
    this.state.pinCode === input ? Actions.sessionSwiping() : null;
  };

  render() {
    return (
      <LinearGradient colors={[`#008EFF`, `#00C8FF`]}  style={s.container}>
          <View style={s.titleContainer}>
            <Text style={s.title}>{`Voer de connectiepin in`.toUpperCase()}</Text>
          </View>
          <View style={s.introContainer}>
            <Text style={s.intro}>Voer hier de code van de begeleider in om verder te gaan</Text>
          </View>
          <View style={s.inputContainer}>
            <TextInput
              style={s.input} keyboardType='numeric' placeholder='0000' returnKeyType='go'
              maxLength={4}
              onChangeText={pin => this._matchPin(parseInt(pin))}
            />
          </View>
      </LinearGradient>
    );
  }
}
