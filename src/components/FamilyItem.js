import React, { Component, PropTypes } from 'react';
import { View, Text, Image } from 'react-native';

import s from 'src/assets/styles/components/FamilyItem';
import avatar from 'src/assets/img/icons/avatar_blue@2x.png';

export default class FamilyItem extends Component {
  constructor(props, context) {
    super(props, context);
    console.log(props);
  }

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    const { name, shouldHighlight } = this.props;
    return (
      <View
        ref={component => this._root = component}
        style={shouldHighlight ? s.highlightedContainer : s.container}
      >
        <Image source={avatar} style={s.image} />
        <View style={s.textContainer}>
          <Text style={s.label}>Familie</Text>
          <Text style={s.name}>{ name }</Text>
        </View>
      </View>
    );
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    shouldHighlight: PropTypes.bool,
  }
}
