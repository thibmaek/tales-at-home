import React, { PropTypes } from 'react';
import { View, Text, TextInput } from 'react-native';
import { accentBlue, white } from 'src/assets/styles/vars';
import LinearGradient from 'react-native-linear-gradient';

import Button from 'apsl-react-native-button';

import globalStyle from 'src/assets/styles/GlobalStyle.js';
import s from 'src/assets/styles/components/Login';

const Login = () => {
  return (
    <LinearGradient colors={[`#008EFF`, `#00C8FF`]}  style={s.container}>
    <View style={s.loginContainer}>
      <View style={s.loginTopContainer}>
          <Text style={[globalStyle, s.title]}>Aanmelden</Text>
          <View style={s.textInput}>
            <TextInput
              style={[globalStyle, s.input]}
              placeholder='Wat is je e-mail adres?'
              placeholderTextColor={white}
            />
          </View>
          <View style={s.buttonContainer}>
              <Button style={s.button} textStyle={[globalStyle, { fontWeight: `bold`, color: accentBlue }]}>Doorgaan</Button>
          </View>
      </View>
      <View style={s.anonLogin}>
        <Text style={[globalStyle, s.underlineLink]}>Anonieme Login</Text>
      </View>
    </View>
    </LinearGradient>
  );
};

Login.propTypes = {
  title: PropTypes.string,
  action: PropTypes.string,
};

export default Login;
