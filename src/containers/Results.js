import React, { Component, PropTypes } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import { Database } from 'src/config/firebase';

import getNameInitials from 'src/lib/getNameInitials';

import { Card } from 'src/components/';

import { s, familyMember } from 'src/assets/styles/containers/Results';

export default class Results extends Component {
  constructor(props, context) {
    super(props, context);

    this.ref = Database.ref(`/families/${props.selectedFamily}`);
    this.state = {
      notes: null,
      members: null,
    };
  }

  componentDidMount() {
    this._getFamilyMembers(this.ref);
    this._getNotesForFamily(this.ref);
  }

  _getNotesForFamily(ref) {
    ref.child(`/notes`).on(`value`, snapshot => {
      snapshot.forEach(data => {
        console.log(data.val());
      });
    });
  }

  _getFamilyMembers(ref) {
    ref.child(`members`).on(`value`, snapshot => {
      const members = [];
      snapshot.forEach(data => {
        members.push({ ...data.val(), key: data.key });
      });

      this.setState({ members });
    });
  }

  render() {
    return (
      this.state.members
        ? <View style={s.container}>
          <View style={s.familyMembers}>
            {this.state.members.map(member =>
              <View style={familyMember.container} key={member.name}>
                {member.avatar
                  ? <Image style={familyMember.avatar} source={{ uri: member.avatar }} />
                  : <View style={familyMember.noAvatar}>
                      <Text style={familyMember.initials}>
                        {getNameInitials(member.name)}
                      </Text>
                    </View>
                }
                <Text style={familyMember.name}>{member.name}</Text>
                <Text style={familyMember.language}>{member.lang}</Text>
              </View>
            )}
          </View>
          {this.state.notes
            ? <ScrollView style={s.notes} horizontal={true} alwaysBounceHorizontal={true}>
                {this.state.map(note => <Card key={note.key} action='Bewerken' {...note} />)}
              </ScrollView>
            : null
          }
        </View>
      : null
    );
  }

  static propTypes = {
    selectedFamily: PropTypes.string.isRequired,
  }
}
