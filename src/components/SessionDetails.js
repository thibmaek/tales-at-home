import React, { PropTypes, Component } from 'react';
import { View, Text, TouchableWithoutFeedback, TextInput } from 'react-native';

import s from 'src/assets/styles/components/SessionDetails';
import { mediumGray } from 'src/assets/styles/vars';

import { CustomButton, SessionOption } from 'src/components/';
import generatePin from 'src/lib/generatePin';

export default class SessionDetails extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      displaySessionDetails: true,
      button: `disabledSubmitButton`,
    };
  }

  _handleToggleBegin() {
    this.setState({
      displaySessionDetails: false,
    });
  }

  _handleToggleResults() {

  }

  render() {
    const { title, description } = this.props;
    const { displaySessionDetails, button } = this.state;

    return (
      <View style={s.container}>
        <SessionOption title={title} description={description} />
        {displaySessionDetails
          ? <View>
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
                onPress={() => this._handleToggleBegin()} />
            </View>
          :
            <View>
              <View>
                <Text style={s.label}>{`Deelnemerscode`.toUpperCase()}</Text>
                <Text style={s.code}>{generatePin(0, 9, 4)}</Text>
              </View>
              <CustomButton style={s.button}
              type={button} content='Beginnen' onPress={() => this._handleToggleResults()} />
            </View>
        }
      </View>
    );
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }
}
