import React, { PropTypes, Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { SessionOption, SessionDetails } from 'src/components/';

import s from 'src/assets/styles/components/SessionOptionList';
import cross from 'src/assets/img/icons/cross@2x.png';

export default class SessionOptionList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      displaySessionDetails: false,
      displaySessionPicker: true,
      selectedSessionTitle: null,
      selectedSessionDescription: null,
    };
  }

  _handleSessionTouch(selectedSessionTitle, selectedSessionDescription) {
    this.setState({
      displaySessionPicker: false,
      displaySessionDetails: true,
      selectedSessionTitle,
      selectedSessionDescription,
    });
  }

  render() {
    const { sessionOptions, onClose } = this.props;
    const { displaySessionPicker, displaySessionDetails,
    selectedSessionTitle, selectedSessionDescription } = this.state;

    return (
      <View>
        <View style={s.sessionOptionContainer}>
          <View style={s.headerBar}>
            <Text style={s.title}>Nieuwe sessie starten</Text>
            <TouchableOpacity onPress={onClose}>
              <Image style={s.cross} source={cross} />
            </TouchableOpacity>
          </View>
          <View style={s.contentContainer}>
            {displaySessionPicker
              ? sessionOptions.map(session =>
                <SessionOption key={session.key} {...session}
                  onPress={() => this._handleSessionTouch(
                    session.title,
                    session.description
                  )}
                />)
              : null
            }
            {displaySessionDetails
              ? <SessionDetails title={selectedSessionTitle}
              description={selectedSessionDescription} />
              : null
            }
          </View>
        </View>
      </View>
    );
  }

  static propTypes = {
    sessionOptions: PropTypes.array.isRequired,
    onClose: PropTypes.func.isRequired,
  }
}
