import React, { PropTypes } from 'react';
import { View } from 'react-native';
import Button from 'apsl-react-native-button';
import s from 'src/assets/styles/components/MenuOption';
import capString from 'src/lib/capitalizeString';

const MenuOption = ({ action }) => (
  <View>
    <Button style={s.button} >{capString(action)}</Button>
  </View>
);

MenuOption.propTypes = {
  action: PropTypes.string.isRequired,
};

export default MenuOption;
