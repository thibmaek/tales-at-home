import React, { Component, PropTypes } from 'react';
import { View, Picker, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import s from '../styles/LanguageSelection';

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <LinearGradient colors={[`#3fa7e6`, `#4cccf1`]}  style={s.container}>
        <View style={s.view}>
          <Text style={s.title}>Kies een taal</Text>
          <Picker
            selectedValue={this.props.initialLang}
            onValueChange={lang => this.setState({ lang })}
          >
            <Picker.Item label='English' value='en' />
            <Picker.Item label='Nederlands' value='nl' />
          </Picker>
        </View>
      </LinearGradient>
    );
  }
}

App.propTypes = {
  initialLang: PropTypes.string.isRequired,
};
