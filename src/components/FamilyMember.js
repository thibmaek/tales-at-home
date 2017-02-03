import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

import s from 'src/assets/styles/components/FamilyMember';

import getNameInitials from 'src/lib/getNameInitials';

const FamilyMember = ({ name }) => (
  <View style={s.container}>
    <Text style={s.text}>{ getNameInitials(name) }</Text>
  </View>
);

FamilyMember.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FamilyMember;
