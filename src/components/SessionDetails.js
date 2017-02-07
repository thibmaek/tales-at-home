import React, { PropTypes } from 'react';
import { View, Text, TouchableWithoutFeedback, TextInput } from 'react-native';

import s from 'src/assets/styles/components/SessionDetails';
import { mediumGray } from 'src/assets/styles/vars';

import { CustomButton } from 'src/components/';
import { SessionOption } from 'src/components/';


const SessionDetails = ({ title, description }) => (
  <View style={s.container}>
    <SessionOption title={title} description={description} />
    <View style={s.inputContainer}>
      <TextInput
        style={s.input}
        placeholder='Kies een situatie'
        returnKeyType='next'
        placeholderTextColor={mediumGray}
        onChangeText={email => this.setState({ email })}
      />
    </View>
    <TouchableWithoutFeedback>
      <View>
        <Text style={s.textButton}>Nog een situatie toevoegen</Text>
      </View>
    </TouchableWithoutFeedback>
    <CustomButton style={s.button} type='submitButton' content='Beginnen'
      onPress={() => this._handleToggleNote()} />
  </View>
);

SessionDetails.propTypes = {
  selectedSession: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default SessionDetails;
