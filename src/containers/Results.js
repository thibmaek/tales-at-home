import React, { Component, PropTypes } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import getNameInitials from 'src/lib/getNameInitials';

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
            <View key={member.key}>
              {member.avatar
                ? <Image style={familyMember.avatar} source={{ uri: member.avatar }} />
                : <View style={familyMember.noAvatar}>
                    <Text style={familyMember.initials}>
                      {getNameInitials(member.name)}
                    </Text>
                  </View>
              }
              <Text>
                <Text>{member.name}</Text>
                <Text>{member.lang}</Text>
              </Text>
            </View>
          )}
        </View>
        <ScrollView horizontal={true} alwaysBounceHorizontal={true}>

        </ScrollView>
      </View>
    );
  }

  static propTypes = {
    familyMembers: PropTypes.array.isRequired,
  }
}
