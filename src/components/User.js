import React, { PropTypes } from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Auth } from 'src/config/firebase';

import s from 'src/assets/styles/components/User';

const User = ({ name, imageURI }) => (
  <TouchableOpacity onPress={() => Auth.signOut().then(Actions.rootScene)}>
    <View style={s.container}>
      <Image source={imageURI} style={s.image} />
      <Text style={s.text}>{name}</Text>
    </View>
  </TouchableOpacity>
);

User.defaultProps = {
  imageURI: require(`src/assets/img/icons/defaultUser.png`),
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  imageURI: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default User;
