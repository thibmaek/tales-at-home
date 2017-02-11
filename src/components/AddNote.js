import React, { PropTypes } from 'react';
import { View, TextInput, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import DynamicButton from 'rndynamicbutton';

import { Database } from 'src/config/firebase';

import s from 'src/assets/styles/components/AddNote';
import cross from 'src/assets/img/icons/cross@2x.png';

let TITLE = ``;
let CONTENT = ``;

const addNoteToFamily = (id, title, content) => {
  if (title && content) {
    Database.ref(`/families/${id}/notes`).push({
      meta: `${new Date()}`,
      title,
      content,
    });
    Actions.refresh();
  }
};

const AddNote = ({ id, onClose }) => (
  <View style={s.container}>
    <View style={s.addNoteContainer}>
      <View style={s.headerBar}>
        <TextInput style={s.title} placeholder='Sessie #…' onChangeText={text => TITLE = text} />
        <TouchableOpacity onPress={onClose}>
          <Image style={s.cross} source={cross} />
        </TouchableOpacity>
      </View>
      <View style={s.contentContainer}>
        <TextInput
          style={s.content}
          multiline={true}
          numberOfLines={4}
          placeholder='Schrijf hier je notitie…'
          onChangeText={text => CONTENT = text}
        />
      </View>
    </View>
    <DynamicButton
      touchable='highlight'
      style={s.button}
      textStyle={s.buttonText}
      action={() => addNoteToFamily(id, TITLE, CONTENT)}>
      notitie toevoegen
    </DynamicButton>
  </View>
);

AddNote.propTypes = {
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddNote;
