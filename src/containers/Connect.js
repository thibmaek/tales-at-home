import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';
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
          <Text style={s.title}>Voer de connectiepin in</Text>
          <TextInput
            style={s.input} keyboardType='number-pad' placeholder='0000'
            maxLength={4}
            onChangeText={pin => this._matchPin(parseInt(pin))}
          />
      </LinearGradient>
    );
  }
}
