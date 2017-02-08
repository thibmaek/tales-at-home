import React, { PropTypes } from 'react';
import { View, Text, Image } from 'react-native';
import Button from 'apsl-react-native-button';

import upperCase from 'src/lib/upperCaseString';

import s from 'src/assets/styles/components/Alert';
import cross from 'src/assets/img/icons/cross@2x.png';

const Alert = ({ action, title, children }) => (
  <View style={s.container}>
    <View style={s.alertContainer}>
      <Text style={s.title}>{ title }</Text>
      { children ? <Text style={s.message}>{ children }</Text> : null }
      {action
        ? <Button style={s.button} textStyle={s.buttonText} onPress={() => action.func()}>
            { upperCase(action.title) }
          </Button>
        : null
      }
      <Image source={cross} style={s.cross} />
    </View>
  </View>
);

Alert.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.object,
  children: PropTypes.string,
};

export default Alert;
