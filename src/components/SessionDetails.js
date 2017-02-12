import React, { PropTypes, Component } from 'react';
import { View, Text, TouchableWithoutFeedback, TextInput } from 'react-native';
import DynamicButton from 'rndynamicbutton';
import BlueToothCP from 'react-native-bluetooth-cross-platform';

import { SessionOption } from 'src/components/';

import generatePin from 'src/lib/generatePin';
import upperCaseString from 'src/lib/upperCaseString';

import s from 'src/assets/styles/components/SessionDetails';
import { mediumGray } from 'src/assets/styles/vars';

export default class SessionDetails extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      displaySessionDetails: true,
      pin: generatePin(1, 9, 4),
      connections: [],
    };
  }

  componentDidMount() {
    BlueToothCP.addConnectedListener(({ id }) => {
      console.log(`[SessionDetails]: Connected to `, id);
      BlueToothCP.sendMessage(`${this.state.pin}`, id);
      console.log(`[SessionDetails]: Sent message ${this.state.pin} to `, id);
    });
  }

  componentDidUpdate() {
    this.state.connections.forEach(({ id }) => {
      console.log(`[SessionDetails]: Sent invite to `, id);
      BlueToothCP.inviteUser(id);
    });
  }

  _handleToggleBegin() {
    this.setState({
      displaySessionDetails: false,
    });

    BlueToothCP.advertise(`WIFI`);
    this._handleDetection();
  }

  _handleDetection() {
    const { connections } = this.state;

    BlueToothCP.addPeerDetectedListener(user => {
      console.log(this);
      this.setState({
        connections: [...connections, user],
      });
    });
  }

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
                <Text style={s.label}>{upperCaseString(`Deelnemerscode`)}</Text>
                <Text style={s.code}>{ this.state.pin }</Text>
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
