import React, { Component, PropTypes } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import { Card } from 'src/components/';

import { Database } from 'src/config/firebase';
import getNameInitials from 'src/lib/getNameInitials';

import { s, familyMember } from 'src/assets/styles/containers/Results';

export default class Results extends Component {
  constructor(props, context) {
    super(props, context);

    this.ref = Database.ref(`/families`);
    this.state = {};
  }

  componentDidMount() {
    this._getNotes(this.props);
    this._getMembers(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this._getNotes(nextProps);
    this._getMembers(nextProps);
  }

  _getNotes(props) {
    this.ref.child(`/${props.selectedFamily}/notes`).once(`value`)
      .then(snap => {
        const notes = [];
        snap.forEach(data => {
          notes.push({ ...data.val(), key: data.key });
        });
        this.setState({ notes });
      })
      .catch(e => console.error(e));
  }

  _getMembers(props) {
    this.ref.child(`/${props.selectedFamily}/members`).once(`value`)
      .then(snap => {
        const members = [];
        snap.forEach(data => {
          members.push({ ...data.val(), key: data.key });
        });
        this.setState({ members });
      })
      .catch(e => console.error(e));
  }

  _renderMembers() {
    return (
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
    );
  }

  _renderNotes() {
    return (
      <ScrollView style={s.notes} horizontal={true} alwaysBounceHorizontal={true}>
        {this.state.notes.reverse().map(note =>
          <Card key={note.key} action='Bewerken' {...note} />
        )}
      </ScrollView>
    );
  }

  render() {
    return (
      <View style={s.container}>
        {this.state.members ? this._renderMembers() : null}
        {this.state.notes && this.state.notes.length > 0 ? this._renderNotes() : null}
      </View>
    );
  }

  static propTypes = {
    selectedFamily: PropTypes.string.isRequired,
  }
}
