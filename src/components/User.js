import React, { PropTypes } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import globalStyle from '../styles/GlobalStyle.js';

const User = ({ name, imageURI }) => {
  return (
    <View style={s.container}>
      <Image
        source={imageURI}
        style={s.image}
      />
      <Text style={[globalStyle, s.text]}>{name}</Text>
    </View>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  imageURI: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const s = StyleSheet.create({
  container: {
    flexDirection: `row`,
    flex: 2,
    justifyContent: `flex-end`,
    alignItems: `center`,
    marginRight: 20,
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 2.5,
    marginRight: 6,
  },
  text: {
    color: `rgba(155, 155, 155, 1)`,
    fontSize: 14,
    fontWeight: `bold`,
  },
});

export default User;
