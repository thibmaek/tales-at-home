import React, { Component, PropTypes } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import DynamicButton from 'rndynamicbutton';

import { AddNote, SessionOptionList } from 'src/components/';

import s from 'src/assets/styles/components/ActionMenu';

export default class ActionMenu extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      displayActionButton: true,
      displayMenuOptions: false,
      displaySessionOptions: false,
      displayNoteInput: false,
    };
  }

  _toggleMenuOptions() {
    this.setState({
      displayMenuOptions: !this.state.displayMenuOptions,
    });
  }

  _handleToggleSessionOptionList() {
    this.setState({
      displayMenuOptions: false,
      displaySessionOptions: !this.state.displaySessionOptions,
    });
  }

  _handleToggleNote() {
    this.setState({
      displayMenuOptions: false,
      displayActionButton: false,
      displayNoteInput: !this.state.displayNoteInput,
    });
  }

  _handleCloseNote() {
    this.setState({
      displayActionButton: true,
      displayNoteInput: !this.state.displayNoteInput,
    });
  }

  _handleCloseSessionList() {
    this.setState({
      displayActionButton: true,
      displaySessionOptions: !this.state.displaySessionOptions,
    });
  }

  render() {
    const {
      displayMenuOptions, displayNoteInput, displayActionButton, displaySessionOptions,
    } = this.state;

    return (
      <View style={s.actionMenuContainer}>
        {displayMenuOptions
          ? <View style={s.actionInnerMenuContainer}>
              <DynamicButton
                touchable='highlight'
                style={s.button}
                textStyle={s.buttonText}
                action={() => this._handleToggleSessionOptionList()}
              >
                Nieuwe sessie starten
              </DynamicButton>
              <DynamicButton
                touchable='highlight'
                style={s.button}
                textStyle={s.buttonText}
                action={() => this._handleToggleNote()}
              >
                Notitie toevoegen
              </DynamicButton>
            </View>
          : null
        }

        {displayNoteInput
          ? <AddNote onClose={() => this._handleCloseNote()} id={this.props.selectedFamily} />
          : null
        }

        {displaySessionOptions
          ? <SessionOptionList onClose={() => this._handleCloseSessionList()} />
          : null
        }

        {displayActionButton
          ? <TouchableHighlight
              style={s.addButton}
              onPress={() => this._toggleMenuOptions()}>
               <Text style={s.addButtonText}>+</Text>
            </TouchableHighlight>
          : null
        }
      </View>
    );
  }

  static propTypes = {
    selectedFamily: PropTypes.string.isRequired,
  }
}
