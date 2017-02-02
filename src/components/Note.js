import React, { PropTypes } from 'react';
import { View, Text, TextInput, Image } from 'react-native';


import Button from 'apsl-react-native-button';

import s from 'src/assets/styles/components/Note';
import { lightBlack, black } from 'src/assets/styles/vars';
import cross from 'src/assets/img/icons/cross.png';

const Note = ({ type, buttonContent }) => {
  return (
    <View style={s.optionButtonContainer}>
    { type === `button`
      ? <Button style={s.optionButton} textStyle={s.buttonText}>{ buttonContent }</Button>
      : <View style={s.container}>
          <View style={s.titleContainer}>
            <TextInput style={s.title}
            placeholder='Wat is je e-mail adres?'
            placeholderTextColor={lightBlack} />
            <Image source={cross} style={s.cross} />
          </View>
          <View style={s.contentContainer}>
            <TextInput style={s.content}
            multiline={true}
            numberOfLines={4}
            placeholder='Schrijf hier je notitief?'
            placeholderTextColor={black} />
          </View>
        </View>
    }
    </View>
  );
};

Note.propTypes = {
  type: PropTypes.string,
  buttonContent: PropTypes.string,
};

export default Note;
