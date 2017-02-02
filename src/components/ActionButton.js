import React, { Component, PropTypes } from 'react';
import { View, Text, Image } from 'react-native';
import Button from 'apsl-react-native-button';

import s from 'src/assets/styles/components/ActionButton';

import closeIcon from 'src/assets/img/icons/cross.png';

export default class ActionButton extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { displayChildren: true, displayOptions: false };
  }

  _toggleChildren() {
    this.setState({
      displayChildren: !this.state.displayChildren,
    });
  }

  _toggleOptions() {
    this.setState({
      displayOptions: !this.state.displayOptions,
    });
  }

  render() {
    return (
      <View style={s.actionContainer}>
        <View style={s.optionContainer}>
          <View style={s.headerBar}>
            <Text style={s.title}>Nieuwe sessie starten</Text>
            <Image style={s.closeButton} source={closeIcon} />
          </View>
          {this.state.displayChildren ? this.props.children : null}
        </View>
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
