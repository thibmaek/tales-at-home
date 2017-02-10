import React, { Component, PropTypes } from 'react';
import { Animated } from 'react-native';
import Animation from 'lottie-react-native';

import PreloaderData from 'src/assets/animations/Preloader.json';

export default class Preloader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
    }).start();
  }

  render() {
    return (
      <Animation
        style={{ width: this.props.size, height: this.props.size }}
        source={PreloaderData}
        progress={this.state.progress}
      />
    );
  }

  static defaultProps = {
    size: 64,
  };

  static propTypes = {
    size: PropTypes.number.isRequired,
  };
}
