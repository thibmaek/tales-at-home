import React, { PropTypes } from 'react';
import { View, Image, Text } from 'react-native';

import globalStyle from 'src/assets/styles/GlobalStyle.js';
import s from 'src/assets/styles/components/User';

const User = ({ name, imageURI }) => {
  return (
    <View style={s.container}>
      <Image source={imageURI} style={s.image} />
      <Text style={[globalStyle, s.text]}>{name}</Text>
    </View>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  imageURI: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default User;
