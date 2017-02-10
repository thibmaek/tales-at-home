import React, { PropTypes, Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { SessionOption, SessionDetails, Preloader } from 'src/components/';

import { Database } from 'src/config/firebase';

import s from 'src/assets/styles/components/SessionOptionList';
import cross from 'src/assets/img/icons/cross@2x.png';

export default class SessionOptionList extends Component {
  constructor(props, context) {
    super(props, context);

    this.ref = Database.ref(`/sessions`);
    this.state = {
      displaySessionDetails: false,
      displaySessionPicker: true,
    };
  }

  componentWillMount() {
    this._getSessionList();
  }

  _getSessionList() {
    this.ref.once(`value`)
      .then(snap => {
        const sessionOptions = [];
        snap.forEach(data => {
          sessionOptions.push({ ...data.val(), key: data.key });
        });

        this.setState({ sessionOptions });
      })
      .catch(e => console.error(e));
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
    const {
      sessionOptions,
      displaySessionPicker, displaySessionDetails,
      selectedSessionTitle, selectedSessionDescription,
    } = this.state;

    return (
      <View style={s.container}>
          {sessionOptions
            ? <View style={s.sessionOptionContainer}>
                <View style={s.headerBar}>
                  <Text style={s.title}>Nieuwe sessie starten</Text>
                  <TouchableOpacity onPress={this.props.onClose}>
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
            : <Preloader size={32} />
          }
      </View>
    );
  }

  static propTypes = {
    // sessionOptions: PropTypes.array.isRequired,
    onClose: PropTypes.func.isRequired,
  }
}
