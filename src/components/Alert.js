import React, { PropTypes } from 'react';
import { View, Text, Image } from 'react-native';

import Button from 'apsl-react-native-button';

import s from 'src/assets/styles/components/Alert';
import cross from 'src/assets/img/icons/cross.png';

const Alert = ({ action, title, message }) => (
  <View style={s.container}>
    <View style={s.alertContainer}>
      <Text style={s.title}>{ title }</Text>
      {message ? <Text style={s.message}>{ message }</Text> : null}
      {action ? <Button style={s.button} textStyle={s.buttonText}>{ action }</Button> : null}
      <Image source={cross} style={s.cross} />
    </View>
  </View>
);

Alert.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.string,
  message: PropTypes.string,
};

export default Alert;
