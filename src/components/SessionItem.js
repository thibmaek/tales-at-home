import React, { PropTypes } from 'react';
import { View, Text, Image } from 'react-native';

import s from 'src/assets/styles/components/SessionItem';

const SessionItem = ({ image, title, description }) => {
  return (
    <View style={s.container}>
      <View style={s.imageContainer}>
        <Image source={image} style={s.cross} />
      </View>
      <View style={s.textContainer}>
        <Text style={s.title}>{ title }</Text>
        <Text style={s.description}>{ description }</Text>
        </View>
    </View>
  );
};

SessionItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default SessionItem;
