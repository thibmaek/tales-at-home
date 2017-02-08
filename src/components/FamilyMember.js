import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

import getNameInitials from 'src/lib/getNameInitials';

import s from 'src/assets/styles/components/FamilyMember';

const FamilyMember = ({ name, role }) => (
  <View style={s.container}>
    <View style={s.initialContainer}>
      <Text style={s.text}>{ getNameInitials(name) }</Text>
    </View>
    <View style={s.infoContainer}>
      <Text style={s.name}>{name}</Text>
      <Text style={s.role}>{role}</Text>
    </View>
  </View>
);

FamilyMember.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default FamilyMember;
