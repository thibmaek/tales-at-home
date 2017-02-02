import React, { PropTypes } from 'react';
import { View, Image, Text } from 'react-native';

import s from 'src/assets/styles/components/User';

const User = ({ name, imageURI }) => {
  return (
    <View style={s.container}>
      <Image source={imageURI} style={s.image} />
      <Text style={s.text}>{name}</Text>
    </View>
  );
};

User.defaultProps = {
  imageURI: require(`src/assets/img/icons/defaultUser.png`),
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  imageURI: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default User;
