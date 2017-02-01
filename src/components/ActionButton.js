import React, { PropTypes } from 'react';
import { View } from 'react-native';

import Button from 'apsl-react-native-button';

import s from 'src/assets/styles/components/ActionButton';

const ActionButton = ({ type }) => {
  return (
    <View style={s.buttonContainer}>
      { type === `plus`
        ? <Button style={s.circleButton} textStyle={s.circleButtonText}>+</Button>
        : <Button style={s.button} textStyle={s.buttonText}>{ type }</Button>
      }
    </View>
  );
};

ActionButton.propTypes = {
  type: PropTypes.string,
};

export default ActionButton;
