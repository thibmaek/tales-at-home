import React from 'react';
import { View, TouchableWithoutFeedback, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CustomButton } from 'src/components/';

import s from 'src/assets/styles/containers/UserPicker';
import professionalChar from 'src/assets/img/chars/professionalChar.png';
import familyChars from 'src/assets/img/chars/familyChars.png';

const AUTH_REGISTER = { action: `registreren`, title: `registreren`, method: `register` };

const UserPicker = () => (
  <View style={s.container}>
    <View style={s.buttonsContainer}>
      <View style={s.professionalContainer}>
        <TouchableWithoutFeedback onPress={() => Actions.setupScene({ authType: AUTH_REGISTER })}>
          <View style={s.professionalInnerContainer}>
            <Image source={professionalChar} style={s.char} />
            <CustomButton style={s.button} type='submitButton' content='Ik ben een professional'
            onPress={() => Actions.setupScene({ authType: AUTH_REGISTER })} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={s.familyContainer}>
        <TouchableWithoutFeedback onPress={() => Actions.connectionScene}>
          <View style={s.familyInnerContainer}>
            <Image source={familyChars} style={s.char} />
            <CustomButton style={s.button} type='submitButton' content='Ik ben een gezinslid'
            onPress={() => Actions.connectionScene} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  </View>
);

export default UserPicker;
