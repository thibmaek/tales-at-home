import React, { PropTypes } from 'react';
import { View, Text, Image } from 'react-native';

import globalStyle from 'src/assets/styles/GlobalStyle';
import { familyItem } from 'src/assets/styles/components/Sidebar';

const FamilyItem = ({ name, avatar }) => {
  return (
    <View style={familyItem.container}>
      <Image source={avatar} style={familyItem.image} />
      <View style={familyItem.textContainer}>
        <Text style={[globalStyle, familyItem.label]}>Familie</Text>
        <Text style={[globalStyle, familyItem.name]}>{name}</Text>
      </View>
    </View>
  );
};

FamilyItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default FamilyItem;
