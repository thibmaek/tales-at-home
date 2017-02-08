import React, { PropTypes } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import s from 'src/assets/styles/components/SessionOption';
import sessionImage from 'src/assets/img/icons/sessionDefault@2x.png';

const SessionOption = ({ title, description, onPress }) => (
  <TouchableOpacity style={s.container} onPress={onPress}>
    <View style={s.imageContainer}>
      <Image source={sessionImage} style={s.cross} />
    </View>
    <View style={s.textContainer}>
      <Text style={s.title}>{ title }</Text>
      <Text style={s.description}>{ description }</Text>
    </View>
  </TouchableOpacity>
);

SessionOption.propTypes = {
  image: PropTypes.string,
  onPress: PropTypes.func,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SessionOption;
