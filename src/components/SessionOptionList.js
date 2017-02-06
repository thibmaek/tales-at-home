import React, { PropTypes } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import s from 'src/assets/styles/components/SessionOptionList';
import cross from 'src/assets/img/icons/cross@2x.png';

import { SessionOption } from 'src/components/';

const SessionOptionList = ({ sessionOptions, onClose }) => (
  <View>
    <View style={s.sessionOptionContainer}>
      <View style={s.headerBar}>
        <Text style={s.title}>Nieuwe sessie starten</Text>
        <TouchableOpacity onPress={onClose}>
          <Image style={s.cross} source={cross} />
        </TouchableOpacity>
      </View>
      <View style={s.contentContainer}>
        {sessionOptions.map(session => <SessionOption key={session.key} {...session} />)}
      </View>
    </View>
  </View>
);

SessionOptionList.propTypes = {
  sessionOptions: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SessionOptionList;
