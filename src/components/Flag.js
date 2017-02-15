import React, { PropTypes } from 'react';
import { View, Text, Animated } from 'react-native';

import s from 'src/assets/styles/components/Flag';

const Flag = ({ uri, name, subStyle }) => (
  <View style={s.container}>
    <Animated.Image style={subStyle ? subStyle : s.image} source={uri} />
    { name ? <Text style={s.text}>{name}</Text> : null }
  </View>
);

Flag.propTypes = {
  uri: PropTypes.number.isRequired,
  name: PropTypes.string,
  subStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
};

export default Flag;
