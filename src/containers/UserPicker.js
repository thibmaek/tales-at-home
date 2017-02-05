import React from 'react';
import { View, TouchableWithoutFeedback, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

import s from 'src/assets/styles/containers/UserPicker';
import btnProfessional from 'src/assets/img/icons/btnProfessional.png';
import btnFamily from 'src/assets/img/icons/btnFamily.png';
import professionalChar from 'src/assets/img/chars/professionalChar.png';
import familyChars from 'src/assets/img/chars/familyChars.png';

const AUTH_LOGIN = { action: `inloggen`, title: `aanmelden`, method: `login` };
// const AUTH_REGISTER = { action: `registreren`, title: `aanmelden`, method: `register` };

const UserPicker = () => (
  <View style={s.container}>
    <View style={s.buttonsContainer}>
      <View style={s.professionalContainer}>
        <TouchableWithoutFeedback onPress={() => Actions.setupScene({ authType: AUTH_LOGIN })}>
          <View style={s.professionalInnerContainer}>
            <Image source={professionalChar} style={s.professionalChar} />
            <Image source={btnProfessional} style={s.button} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={s.familyContainer}>
        <TouchableWithoutFeedback onPress={() => Actions.connectionScene}>
          <View style={s.familyInnerContainer}>
            <Image source={familyChars} />
            <Image source={btnFamily}  style={s.button} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  </View>
);

export default UserPicker;
