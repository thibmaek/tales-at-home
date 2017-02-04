import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';

import { CustomButton, AddNote } from 'src/components/';

import s from 'src/assets/styles/components/ActionMenu';

export default class ActionMenu extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { displayActionButton: true, displayMenuOptions: false,
      displaySessionOptions: false, displayNoteInput: false };
  }

  _toggleMenuOptions() {
    console.log(`test`);
    this.setState({
      isOpen: !this.state.isOpen,
      displayMenuOptions: !this.state.displayMenuOptions,
    });
  }

  _toggleSessionOptions() {
    this.setState({
      displayMenuOptions: false,
      displaySessionOptions: !this.state.displaySessionOptions,
    });
  }

  _toggleAddNote() {
    this.setState({
      displayMenuOptions: false,
      displayActionButton: false,
      displayNoteInput: !this.state.displayNoteInput,
    });
  }

  _closeAddNote() {
    this.setState({
      displayActionButton: true,
      displayNoteInput: !this.state.displayNoteInput,
    });
  }

  render() {
    return (
      <View style={s.actionMenuContainer}>
        {this.state.displayMenuOptions ?
        <View>
            <CustomButton type='menuButton' content='nieuwe sessie starten'
              onPress={() => this._toggleSessionOptions()} />

            <CustomButton type='menuButton' content='notitie toevoegen'
              onPress={() => this._toggleAddNote()} />
        </View>
        : null }

        {this.state.displayNoteInput ?
        <View>
            <AddNote onClose={() => this._closeAddNote()} />
        </View>
        : null }

        {this.state.displaySessionOptions ?
        <View>

            {/* <SessionOptions sessionOptions={this.props.sessionOptions} /> */}
        </View>
        : null }

        {this.state.displayActionButton ?
        <View>
          <CustomButton type='add' content='+'
            onPress={() => this._toggleMenuOptions()} />
        </View>
        : null }
      </View>

    );
  }

  static propTypes = {
    sessionOptions: PropTypes.array,
    type: PropTypes.string,
  }
}
