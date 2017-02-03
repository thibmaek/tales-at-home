import React from 'react';
import { View, TouchableWithoutFeedback, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

import s from 'src/assets/styles/containers/UserPicker';
import btnProfessional from 'src/assets/img/icons/btnProfessional.png';
import btnFamily from 'src/assets/img/icons/btnFamily.png';
import professionalChar from 'src/assets/img/chars/professionalChar.png';
import familyChars from 'src/assets/img/chars/familyChars.png';

const AUTH_LOGIN = { action: `inloggen`, title: `inloggen`, method: `login` };
// const AUTH_REGISTER = { action: `registreren`, title: `aanmelden`, method: `register` };

const UserPicker = () => (
  <View style={s.container}>
    <View style={s.buttonsContainer}>
      <TouchableWithoutFeedback onPress={() => Actions.setupScene({ authType: AUTH_LOGIN })}>
        <Image source={btnProfessional} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Image source={btnFamily} />
      </TouchableWithoutFeedback>
    </View>
    <View style={s.charsContainer} onPress={() => Actions.connectionScene}>
      <Image source={professionalChar} />
      <Image source={familyChars} />
    </View>
  </View>
);

export default UserPicker;
