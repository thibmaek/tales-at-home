import React, { PropTypes } from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';

import s from 'src/assets/styles/components/User';

const User = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={s.container}>
      <Image source={require(`src/assets/img/icons/defaultUser.png`)} style={s.image} />
      <Text style={s.text}>Gastgebruiker</Text>
    </View>
  </TouchableOpacity>

);

// static defaultProps = {
//   imageURI: require(`src/assets/img/icons/defaultUser.png`),
//   name: `Gastgebruiker`,
// };

User.propTypes = {
  onPress: PropTypes.func,
  // name: PropTypes.string,
  // imageURI: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

{/* <TouchableOpacity onPress={onPress}>
  <View style={s.container}>
    <Image source={this.props.imageURI} style={s.image} />
    <Text style={s.text}>{ this.props.name ? this.props.name : `Gastgebruiker` }</Text>
  </View>
</TouchableOpacity> */}

export default User;
