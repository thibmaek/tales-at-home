import React, { PropTypes } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import DynamicButton from 'rndynamicbutton';

import s from 'src/assets/styles/components/Alert';
import cross from 'src/assets/img/icons/cross@2x.png';

const Alert = ({ action, title, children, closeAction }) => (
  <View style={s.container}>
    <View style={s.alertContainer}>
      <Text style={s.title}>{ title }</Text>
      { children ? <Text style={s.message}>{ children }</Text> : null }
      {action
        ? <DynamicButton
            touchable='highlight'
            style={s.button}
            textStyle={s.buttonText}
            action={() => action.func()}>
            { action.title }
          </DynamicButton>
        : null
      }
      <TouchableOpacity onPress={closeAction} style={s.crossContainer}>
        <Image source={cross} style={s.cross} />
      </TouchableOpacity>
    </View>
  </View>
);

Alert.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.object,
  children: PropTypes.string,
  side: PropTypes.string,
  closeAction: PropTypes.func,
};

export default Alert;
