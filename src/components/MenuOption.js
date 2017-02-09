import React, { PropTypes } from 'react';
import { View } from 'react-native';
import DynamicButton from 'rndynamicbutton';

import capString from 'src/lib/capitalizeString';

import s from 'src/assets/styles/components/MenuOption';

const MenuOption = ({ action }) => (
  <View>
    <DynamicButton touchable='highlight' style={s.button} textStyle={s.buttonText}>
      { capString(action) }
    </DynamicButton>
  </View>
);

MenuOption.propTypes = {
  action: PropTypes.string.isRequired,
};

export default MenuOption;
