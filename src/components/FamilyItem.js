import React, { Component, PropTypes } from 'react';
import { View, Text, Image } from 'react-native';

import globalStyle from 'src/assets/styles/GlobalStyle';
import { familyItem } from 'src/assets/styles/components/Sidebar';
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
      <View style={familyItem.container} ref={component => this._root = component}>
        <Image source={avatar} style={familyItem.image} />
        <View style={familyItem.textContainer}>
          <Text style={[globalStyle, familyItem.label]}>Familie</Text>
          <Text style={[globalStyle, familyItem.name]}>{ this.props.name }</Text>
        </View>
      </View>
    );
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
  }
}
