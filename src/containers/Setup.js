import React, { PropTypes } from 'react';
import { View, StatusBar } from 'react-native';

import { AuthType } from 'src/components/';

import s from 'src/assets/styles/containers/Setup';

const Setup = ({ authType }) => {
  const { action, title } = authType;

  return (
    <View style={s.container}>
      <StatusBar hidden={true} />
      <View style={s.view}>
        <AuthType action={action} title={title} {...authType} />
      </View>
    </View>
  );
};

Setup.propTypes = {
  authType: PropTypes.object.isRequired,
};

export default Setup;
