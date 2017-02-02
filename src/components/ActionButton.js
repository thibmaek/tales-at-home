import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import Button from 'apsl-react-native-button';

import s from 'src/assets/styles/components/ActionButton';

export default class ActionButton extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { displayChildren: false };
  }

  _toggleChildren() {
    this.setState({
      displayChildren: !this.state.displayChildren,
    });
  }

  render() {
    return (
      <View style={s.buttonContainer}>
        {this.state.displayChildren ? this.props.children : null}
        {this.props.type === `add`
          ? <Button
              style={s.circleButton} textStyle={s.circleButtonText}
              onPress={() => this._toggleChildren()}
            >
              +
            </Button>
          : <Button style={s.button} textStyle={s.buttonText}>{ this.props.type }</Button>
        }
      </View>
    );
  }

  static propTypes = {
    children: PropTypes.array,
    type: PropTypes.string,
  }
}
