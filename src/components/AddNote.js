import React from 'react';
import { View, TextInput, Image } from 'react-native';

import s from 'src/assets/styles/components/AddNote';
import cross from 'src/assets/img/icons/cross@2x.png';

import { CustomButton } from 'src/components/';

const AddNote = () => (
  <View>
    <View style={s.addNoteContainer}>
      <View style={s.headerBar}>
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
    <CustomButton type='submitButton' content='notitie toevoegen' />
  </View>
);

export default AddNote;
