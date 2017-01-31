import React, { Component, PropTypes } from 'react';
import { View, Text, Image } from 'react-native';

import s from 'src/assets/styles/components/FamilyItem';
import avatar from 'src/assets/img/avatars/rectangle_blue.png';

export default class FamilyItem extends Component {
  constructor(props, context) {
    super(props, context);
  }

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    return (
      <View style={s.container} ref={component => this._root = component}>
        <Image source={avatar} style={s.image} />
        <View style={s.textContainer}>
          <Text style={s.label}>Familie</Text>
          <Text style={s.name}>{ this.props.name }</Text>
        </View>
      </View>
    );
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
  }
}
