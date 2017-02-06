import React, { Component, PropTypes } from 'react';
import { View, TextInput, Image, TouchableOpacity } from 'react-native';

import { Database } from 'src/config/firebase';

import { CustomButton } from 'src/components/';

import hash from 'src/lib/generateIdFromTime';

import s from 'src/assets/styles/components/AddNote';
import cross from 'src/assets/img/icons/cross@2x.png';

export default class AddNote extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      title: null,
      content: null,
    };
  }

  _addNoteToFamily(familyId, title, content) {
    Database.ref(`families/ + ${familyId} + notes/`).push({
      key: hash(Date.now()),
      title: title,
      content: content,
    });
  }

  render() {
    return (
      <View>
        <View style={s.addNoteContainer}>
          <View style={s.headerBar}>
            <TextInput style={s.title} placeholder='Sessie #5' />
            <TouchableOpacity onPress={this.props.onClose}>
              <Image style={s.cross} source={cross} />
            </TouchableOpacity>
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
        <CustomButton type='submitButton' content='notitie toevoegen'
          onPress={() => this._addNoteToFamily(`-KblImH1pkb5Ew9-Qg_h`, `test`, `contest`)} />
      </View>
    );
  }

  static propTypes = {
    onClose: PropTypes.func.isRequired,
  }
}
