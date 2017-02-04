import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Button from 'apsl-react-native-button';

import { Database } from 'src/config/firebase';
import hash from 'src/lib/generateIdFromTime';

import { FamilyMember } from 'src/components/';

import s from 'src/assets/styles/containers/NewFamily';

export default class NewFamily extends Component {
  constructor(props, context) {
    super(props, context);

    this.familyRef = Database.ref(`/families`);
    this.state = {
      members: [],
    };
  }

  _handleAddMember() {

  }

  _handleAddFamily() {
    this.familyRef.push({
      active: true,
      key: hash(Date.now()),
      name: ``,
      members: [{}, {}],
    }).catch(e => console.error(e));
  }

  render() {
    return (
      <View style={s.container}>
        <Text style={s.header}>Nieuw gezin aanmaken</Text>
        <View style={s.details}>
          <Text style={s.headerDetails}>DETAILS VAN HET GEZIN</Text>
          <View style={s.detailInputs}>
            <TextInput style={s.input} placeholder='Familienaam…' />
            <TextInput style={s.input} placeholder='Notitietekst…' />
          </View>
        </View>
        <View style={s.members}>
          <Text style={s.headerMembers}>Gezinsleden</Text>
          <View style={s.memberList}>
            {this.state.members
              ? this.state.members.map(member => <FamilyMember key={member.name} {...member} />)
              : null
            }
            <Button
              style={s.addMemberButton}
              textStyle={s.addMemberButtonText}
              onPress={this._handleAddMember}
            >
              +
            </Button>
            {/* { isAddingMember ? <MemberAdd /> null } */}
          </View>
        </View>
        <Button style={s.addButton} onPress={() => this._handleAddFamily()}>Gezin toevoegen</Button>
      </View>
    );
  }
}
