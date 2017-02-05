import React, { Component, PropTypes } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { CustomButton, Flag } from 'src/components/';

import s from 'src/assets/styles/containers/sessions/Swiping';
import upperCase from 'src/lib/upperCaseString';

export default class Swiping extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      langs: [
        { uri: require(`src/assets/img/flags/flag_be.png`), name: `Vlaams` },
        { uri: require(`src/assets/img/flags/flag_fr.png`), name: `Frans` },
        { uri: require(`src/assets/img/flags/flag_deu.png`), name: `Deutsch` },
      ],
    };
  }

  _renderControl() {
    switch (this.props.step) {
    case `swipe`:
      return (
        <View style={s.swipe}>
          <Text style={s.swipeTitle}>{this.props.selected.name}</Text>
          <Flag
            uri={this.props.selected.uri}
            subStyle={s.swipeImage}
          />
          <Text style={s.swipeAction}>{upperCase(`Swipe omhoog!`)}</Text>
          <CustomButton
            type='submitButton'
            content='Mijn keuze veranderen'
            onPress={() => Actions.swipeInitial({ direction: `leftToRight` })}
          />
        </View>
      );
    default:
      return (
        <View style={s.bar}>
          <View style={s.langs}>
            {this.state.langs.map(lang =>
              <TouchableOpacity key={lang.name} onPress={() => Actions.swipeUp({
                selected: lang,
                dimmed: true,
              })}>
                <Flag {...lang} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={s.container}>
        {this.props.dimmed ? <View style={s.dimmer}></View> : null}
        <Text style={s.title}>{this.props.case.title.toUpperCase()}</Text>
        <Image style={s.image} source={require(`src/assets/img/cases/playground.jpg`)} />
        {this._renderControl()}
      </View>
    );
  }

  static defaultProps = {
    case: {
      id: `playground`,
      title: `We spelen op het speelplein`,
    },
    step: `select`,
    dimmed: false,
  };

  static propTypes = {
    case: PropTypes.object.isRequired,
    step: PropTypes.string.isRequired,
    selected: PropTypes.object,
    dimmed: PropTypes.bool.isRequired,
  }
}
