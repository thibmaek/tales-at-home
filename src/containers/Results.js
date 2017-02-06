import React, { Component, PropTypes } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import getNameInitials from 'src/lib/getNameInitials';

import { Card } from 'src/components/';

import { s, familyMember } from 'src/assets/styles/containers/Results';

export default class Results extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <View style={s.container}>
        <View style={s.familyMembers}>
          {this.props.familyMembers.map(member =>
            <View style={familyMember.container} key={member.key}>
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
        {this.props.notes
          ? <ScrollView style={s.notes} horizontal={true} alwaysBounceHorizontal={true}>
              {this.props.notes.map(note => <Card key={note.key} action='Bewerken' {...note} />)}
            </ScrollView>
          : null
        }
      </View>
    );
  }

  static propTypes = {
    familyMembers: PropTypes.array.isRequired,
    notes: PropTypes.array,
  }
}
