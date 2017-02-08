import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { FamilyMember, CustomButton } from 'src/components/';

import { Database } from 'src/config/firebase';
import capString from 'src/lib/capitalizeString';
import upperCaseString from 'src/lib/upperCaseString';

import s from 'src/assets/styles/containers/NewFamily';

export default class NewFamily extends Component {
  constructor(props, context) {
    super(props, context);

    this.familyRef = Database.ref(`/families`);
    this.state = {
      members: [],
    };
  }

  _openAddMember() {
    this.setState({
      isAddingMember: true,
    });
  }

  _handleAddMember() {
    const { members, name, role, prefLanguage } = this.state;

    if (name && role && prefLanguage) {
      members.push({ name, role, prefLanguage });
      this.setState({ members, name: null, role: null, prefLanguage: null, isAddingMember: false });
    }
  }

  _handleAddFamily() {
    const { members, familyName, description } = this.state;

    if (members.length > 0 && familyName && description) {
      this.familyRef.push({
        active: true,
        name: familyName,
        description,
        members,
      }).then(f => Actions.dashboardScene({ selectedFamily: f.key }))
        .catch(e => console.error(e));
    }
  }

  render() {
    return (
      <View style={s.familyContainer}>
        <Text style={s.headerTitle}>{capString(`Nieuw gezin aanmaken`)}</Text>
        <View style={s.genInfoContainer}>
          <Text style={s.subTitle}>{upperCaseString(`Details van het gezin`)}</Text>
          <View>
            <TextInput style={s.textInput} multiline={true}
              numberOfLines={1} placeholder='Familienaam'
              onChangeText={familyName => this.setState({ familyName })} />
            <TextInput style={s.textBox} multiline={true}
              numberOfLines={4} placeholder='Algemene beschrijving van de familie'
              onChangeText={description => this.setState({ description })} />
          </View>
        </View>
        <View style={s.famMembersContainer}>
          <Text style={s.subTitle}>{upperCaseString(`Gezinsleden`)}</Text>
          <View style={s.famMembersContent}>
            <View style={s.addMemberContainer}>
              <View>
                <CustomButton type='addMemberSmall' content='+'
                  onPress={() => this._openAddMember()} />
              </View>
              <View>
                <Text style={s.newMemberText}>Nieuw gezinslid</Text>
              </View>
            </View>
            {this.state.isAddingMember ?
              <View style={s.addMemberFormContainer}>
                <View style={s.addPhotoContainer}>
                  <CustomButton style={s.addButton} type='addMemberBig' content='+' />
                </View>
                <View>
                  <TextInput style={s.textInput} multiline={true}
                    numberOfLines={1} placeholder='Voornaam'
                    onChangeText={name => this.setState({ name })} />
                  <TextInput style={s.textInput} multiline={true}
                    numberOfLines={1} placeholder='Gezinsrelatie'
                    onChangeText={role => this.setState({ role })} />
                  <TextInput style={s.textInput} multiline={true}
                    numberOfLines={1} placeholder='Taal voorkeur'
                    onChangeText={prefLanguage => this.setState({ prefLanguage })} />
                </View>
              </View>
            :
              <View>
                {this.state.members
                  ? this.state.members.map(member => <FamilyMember key={member.name} {...member} />)
                  : null
                }
              </View>
            }

          </View>
        </View>
        {this.state.isAddingMember ?
          <CustomButton type='submitButton' color='green' content='Gezinslid toevoegen'
            onPress={() => this._handleAddMember()} />
        :
          <CustomButton type='submitButton' color='blue' content='Gezin toevoegen'
            onPress={() => this._handleAddFamily()} />
        }
      </View>
    );
  }
}
