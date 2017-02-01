import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';

import Button from 'apsl-react-native-button';

import s from 'src/assets/styles/components/ActionButton';

export default class ActionButton extends Component {
  constructor(props, context) {
    super(props, context);
  }

  buttonPressed() {
    console.log(`buttonPressed`);
  }

  render() {
    return (
      <View style={s.buttonContainer}>
        { this.props.type === `plus` ?
          <Button style={s.circleButton} textStyle={s.circleButtonText}>+</Button>
        : <Button style={s.button} textStyle={s.buttonText}>{ this.props.type }</Button>
       }
      </View>
    );
  }

  static propTypes = {
    type: PropTypes.string,
  }
}
