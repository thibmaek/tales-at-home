import React, { PropTypes } from 'react';
import { View, Text, TextInput } from 'react-native';
import { accentBlue } from 'src/assets/styles/vars';
import LinearGradient from 'react-native-linear-gradient';

import Button from 'apsl-react-native-button';

import globalStyle from 'src/assets/styles/GlobalStyle.js';
import s from 'src/assets/styles/components/Login';

const Login = ({ title, action }) => {
  return (
    <LinearGradient colors={[`#008EFF`, `#00C8FF`]}  style={s.container}>
    <View style={s.loginContainer}>
      <View style={s.loginTopContainer}>
          { title ? <Text style={[globalStyle, s.title]}>{title}</Text> : null }
          <View style={s.textInput}>
            <TextInput
              style={[globalStyle, s.input]}
              placeholder='Wat is je e-mail adres?'
              placeholderTextColor='white'
              onChangeText={text => console.log(text)}
            />
          </View>
          <View style={s.buttonContainer}>
            {action ?
              <Button style={s.button} textStyle={[globalStyle, { fontWeight: `bold`, color: accentBlue }]}>{action}</Button>
              : null
            }
          </View>
      </View>
      <View style={s.annonLogin}>
        <Text style={[globalStyle, s.underlineLink]}>{`Anonieme Login`}</Text>
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
