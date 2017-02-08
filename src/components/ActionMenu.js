import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';

import { CustomButton, AddNote, SessionOptionList } from 'src/components/';

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
      isOpen: !this.state.isOpen,
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
          ? <View>
              <CustomButton type='menuButton' content='nieuwe sessie starten'
                  onPress={() => this._handleToggleSessionOptionList()} />
              <CustomButton type='menuButton' content='notitie toevoegen'
                onPress={() => this._handleToggleNote()} />
            </View>
          : null
        }

        {displayNoteInput
          ? <View>
              <AddNote onClose={() => this._handleCloseNote()} id={this.props.selectedFamily} />
            </View>
          : null
        }

        {displaySessionOptions
          ? <View>
              <SessionOptionList onClose={() => this._handleCloseSessionList()} />
            </View>
          : null
        }

        {displayActionButton
          ? <View>
              <CustomButton type='add' content='+' onPress={() => this._toggleMenuOptions()} />
            </View>
          : null
        }
      </View>
    );
  }

  static propTypes = {
    selectedFamily: PropTypes.string.isRequired,
  }
}
