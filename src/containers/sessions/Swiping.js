import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { Actions } from 'react-native-router-flux';
import BluetoothCP from 'react-native-bluetooth-cross-platform';
import DynamicButton from 'rndynamicbutton';
import Video from 'react-native-video';

import { Flag, RateCard } from 'src/components/';

import { Database } from 'src/config/firebase';

import s from 'src/assets/styles/containers/sessions/Swiping';
import upperCase from 'src/lib/upperCaseString';

export default class Swiping extends Component {
  constructor(props, context) {
    super(props, context);

    BluetoothCP.advertise(`WIFI-BT`);

    this.ref = Database.ref(`/results`);
    this.state = {
      animation: new Animated.Value(0),
      langs: [
        { uri: require(`src/assets/img/flags/flag_be.png`), name: `Vlaams` },
        { uri: require(`src/assets/img/flags/flag_fr.png`), name: `Frans` },
        { uri: require(`src/assets/img/flags/flag_deu.png`), name: `Deutsch` },
      ],
      received: [],
      caseNumber: 0,
    };
  }

  componentDidMount() {
    if (this.props.step === `awaiting`) {
      setTimeout(() => Actions.swipeReceived({
        dimmed: true,
        received: this.props.received,
        name: this.props.name,
      }), 2000);
    }
  }

  _delegateSwipes(lang) {
    Animated.timing(this.state.animation, { toValue: - 768 }).start();

    this.state.received = [...this.state.received, lang, this.state.langs[2]]; //eslint-disable-line

    setTimeout(() => Actions.swipeAwaiting({
      dimmed: true,
      received: this.state.received,
      name: this.props.name,
    }), 200);
  }

  _didRate(rating) {
    this.ref.push({
      name: this.props.name,
      lang: this.props.received[1],
      rating,
    }).catch(e => console.error(e.msg));
  }

  _renderControl() {
    switch (this.props.step) {
    case `swipe`:
      return (
        <View style={s.swipe}>
          <Text style={s.swipeTitle}>{this.props.selected.name}</Text>
          <TouchableOpacity onPress={() => this._delegateSwipes(this.props.selected.name)}>
            <Flag
              uri={this.props.selected.uri}
              subStyle={[s.swipeImage, {
                transform: [{ translateY: this.state.animation }] },
              ]}
            />
          </TouchableOpacity>
          <Text style={s.swipeAction}>{upperCase(`Swipe omhoog!`)}</Text>
          <DynamicButton
            touchable='highlight'
            style={s.button}
            textStyle={s.buttonText}
            action={() => {
              Actions.swipeInitial({
                direction: `leftToRight`,
                name: this.props.name,
              });}}>
            Mijn keuze veranderen
          </DynamicButton>
        </View>
      );
    case `awaiting`:
      return (
        <View style={s.swipe}>
          <Text style={s.swipeTitle}>Aan het wachten op andere gezinsleden…</Text>
        </View>
      );
    case `received`:
      return (
        <View style={s.swipe}>
          <Text style={[s.swipeTitle, { marginTop: 150 }]}>{this.props.received[1].name}</Text>
          <Flag uri={this.props.received[1].uri} subStyle={s.swipeImage} />
          <View style={s.rateCardContainer}>
            <RateCard type='negative' onPress={() => this._didRate(- 1)} />
            <RateCard type='neutral' onPress={() => this._didRate(0)} />
            <RateCard type='positive' onPress={() => this._didRate(1)} />
          </View>
        </View>
      );
    default:
      return (
        <View style={s.bar}>
          <View style={s.langs}>
            {this.state.langs.map(lang =>
              <TouchableOpacity key={lang.name} onPress={() => {
                Actions.swipeUp({
                  selected: lang,
                  dimmed: true,
                  name: this.props.name,
                });
              }}>
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
        <Video resizeMode='cover' ref={ref => this.video = ref}
          source={require(`src/assets/animations/playground.mp4`)}
          playInBackground={false} playWhenInactive={false}
          style={s.video}
        />
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
    received: PropTypes.array,
    dimmed: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }
}
