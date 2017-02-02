import React, { PropTypes } from 'react';
import { View, TextInput, Image } from 'react-native';
import Button from 'apsl-react-native-button';

import s from 'src/assets/styles/components/Note';
import cross from 'src/assets/img/icons/cross@2x.png';

const _renderNote = () => (
  <View style={s.container}>
    <View style={s.titleContainer}>
      <TextInput style={s.title} placeholder='Sessie #5' />
      <Image style={s.cross} source={cross} />
    </View>
    <View style={s.contentContainer}>
      <TextInput
        style={s.content}
        multiline={true}
        numberOfLines={4}
        placeholder='Schrijf hier je notitie…'
      />
    </View>
  </View>
);

const Note = ({ type, buttonContent }) => (
  <View style={s.optionButtonContainer}>
    {type === `button`
      ? <Button style={s.optionButton} textStyle={s.buttonText}>{ buttonContent }</Button>
      : _renderNote()
    }
  </View>
);

Note.propTypes = {
  type: PropTypes.string,
  buttonContent: PropTypes.string,
};

export default Note;
