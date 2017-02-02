import React, { PropTypes } from 'react';
import { View, Text, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from 'apsl-react-native-button';

import { white } from 'src/assets/styles/vars';
import s from 'src/assets/styles/components/AuthType';

const AuthType = ({ action, title }) => (
  <LinearGradient colors={[`#008EFF`, `#00C8FF`]}  style={s.container}>
    <View style={s.loginContainer}>
      <View style={s.loginTopContainer}>
        <Text style={s.title}>{ title }</Text>
        <View style={s.inputContainer}>
          <TextInput
            style={s.input}
            placeholder='Wat is je e-mail adres?'
            placeholderTextColor={white}
          />
        </View>
        <View style={s.inputContainer}>
          <TextInput
            style={s.input}
            secureTextEntry={true}
            placeholder='Wat is je wachtwoord?'
            placeholderTextColor={white}
          />
        </View>
        <View style={s.buttonContainer}>
          <Button style={s.button} textStyle={s.buttonText}>{ action }</Button>
        </View>
      </View>
      <View style={s.anonLogin}>
        <Text style={s.underlineLink}>Inloggen zonder account</Text>
      </View>
    </View>
  </LinearGradient>
);

AuthType.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  method: PropTypes.string,
};

export default AuthType;
