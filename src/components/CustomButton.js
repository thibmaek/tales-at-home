import React, { PropTypes } from 'react';
import Button from 'apsl-react-native-button';
import s from 'src/assets/styles/components/Buttons';

import capString from 'src/lib/capitalizeString';

const CustomButton = ({ type, content }) => {
  switch (type) {
  case `add`:
    return (
      <Button style={s.circleButton} textStyle={s.buttonTextWhite}
        onPress={this.props.onPress}>{content}</Button>
    );
  case `menuButton`:
    return (
      <Button style={s.roundedButton} textStyle={s.buttonTextBlack}
      onPress={this.props.onPress}>{capString(content)}</Button>
    );
  case `submitButton`:
    return (
      <Button style={s.roundedButtonGreen} textStyle={s.buttonTextWhite}
      onPress={this.props.onPress}>{capString(content)}</Button>
    );
  default:
    return (
      <Button style={s.circleButton} textStyle={s.circleButtonText}
      onPress={this.props.onPress}>{content}</Button>
    );
  }
};

CustomButton.propTypes = {
  type: PropTypes.string,
  onPress: PropTypes.func,
  content: PropTypes.string,
};
