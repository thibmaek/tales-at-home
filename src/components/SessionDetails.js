import React, { PropTypes, Component } from 'react';
import { View, Text, TouchableWithoutFeedback, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import DynamicButton from 'rndynamicbutton';

import { SessionOption } from 'src/components/';

import generatePin from 'src/lib/generatePin';

import s from 'src/assets/styles/components/SessionDetails';
import { mediumGray } from 'src/assets/styles/vars';

export default class SessionDetails extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      displaySessionDetails: true,
    };
  }

  _handleToggleBegin() {
    this.setState({
      displaySessionDetails: false,
    });
  }

  _handleToggleResults = () => Actions.sessionSwiping();

  render() {
    const { title, description } = this.props;
    const { displaySessionDetails } = this.state;

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
                <DynamicButton
                  touchable='highlight'
                  style={s.button}
                  textStyle={s.buttonText}
                  action={() => this._handleToggleBegin()}>
                  Beginnen
                </DynamicButton>
            </View>
          :
            <View>
              <View>
                <Text style={s.label}>{`Deelnemerscode`.toUpperCase()}</Text>
                <Text style={s.code}>{generatePin(0, 9, 4)}</Text>
              </View>
              <DynamicButton touchable='disabled' style={s.button} textStyle={s.buttonText}>
                Resultaten bekijken
              </DynamicButton>
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
