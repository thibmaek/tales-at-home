import React, { Component, PropTypes } from 'react';
import { View, Picker, Text } from 'react-native';

import styles from '../styles/LanguageSelection';

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Kies een taal</Text>
        <Picker
          selectedValue={this.props.initialLang}
          onValueChange={lang => this.setState({ lang })}
        >
          <Picker.Item label='English' value='en' />
          <Picker.Item label='Nederlands' value='nl' />
        </Picker>
      </View>
    );
  }
}

App.propTypes = {
  initialLang: PropTypes.string.isRequired,
};