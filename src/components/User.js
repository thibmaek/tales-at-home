import React, { PropTypes } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const User = ({ name, imageURI }) => {
  return (
    <View style={s.container}>
      <Image
        source={{ uri: imageURI }}
        style={s.image}
      />
      <Text style={s.text}>{name}</Text>
    </View>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  imageURI: PropTypes.string,
};

const s = StyleSheet.create({
  container: {
    flexDirection: `row`,
    flex: 2,
    justifyContent: `flex-end`,
    alignItems: `center`,
    marginRight: 40,
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 2.5,
    marginRight: 6,
  },
  text: {
    color: `rgba(155, 155, 155, 1)`,
    fontSize: 12,
  },
});

export default User;
