import React, { PropTypes } from 'react';
import { View, Text, Image } from 'react-native';

import s from 'src/assets/styles/components/SessionOption';
import sessionImage from 'src/assets/img/icons/sessionDefault@2x.png';

const SessionOption = ({ title, description }) => (
  <View style={s.container}>
    <View style={s.imageContainer}>
      <Image source={sessionImage} style={s.cross} />
    </View>
    <View style={s.textContainer}>
      <Text style={s.title}>{ title }</Text>
      <Text style={s.description}>{ description }</Text>
    </View>
  </View>
);

SessionOption.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SessionOption;
