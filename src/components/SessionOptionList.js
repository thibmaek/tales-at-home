import React, { PropTypes } from 'react';
import { View, Image, Text } from 'react-native';

import s from 'src/assets/styles/components/SessionOptionList';
import cross from 'src/assets/img/icons/cross@2x.png';

import { SessionOption } from 'src/components/';

const SessionOptions = () => (
  <View>
    <View style={s.sessionOptionContainer}>
      <View style={s.headerBar}>
        <Text style={s.title}>Nieuwe sessie starten</Text>
        <Image style={s.cross} source={cross} />
      </View>
      <View style={s.contentContainer}>
        {this.props.sessionOptions.map(session =>
          <SessionOption key={session.key} {...session} />)}
      </View>
    </View>
  </View>
);

SessionOptions.propTypes = {
  sessionOptions: PropTypes.array,
};

export default SessionOptions;
