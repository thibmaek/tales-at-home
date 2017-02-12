import React, { Component, PropTypes } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import DynamicButton from 'rndynamicbutton';

import { AddNote } from 'src/components/';
import { SessionContainer } from 'src/containers/';

import s from 'src/assets/styles/components/ActionMenu';

export default class ActionMenu extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      displayActionButton: true,
      displayMenuOptions: false,
      displaySessionContainer: false,
      displayNoteInput: false,
    };
  }

  _toggleMenuOptions() {
    this.setState({
      displayMenuOptions: !this.state.displayMenuOptions,
    });
  }

  _handleToggleSessionContainer() {
    this.setState({
      displayMenuOptions: false,
      displaySessionContainer: !this.state.displaySessionContainer,
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

  _handleCloseSessionContainer() {
    this.setState({
      displayActionButton: true,
      displaySessionContainer: !this.state.displaySessionContainer,
    });
  }

  render() {
    const {
      displayMenuOptions, displayNoteInput, displayActionButton, displaySessionContainer,
    } = this.state;

    return (
      <View style={s.actionMenuContainer}>
        {displayMenuOptions
          ? <View style={s.actionInnerMenuContainer}>
              <DynamicButton
                touchable='highlight'
                style={s.button}
                textStyle={s.buttonText}
                action={() => this._handleToggleSessionContainer()}
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

        {displaySessionContainer
          ? <SessionContainer onClose={() => this._handleCloseSessionContainer()} />
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
