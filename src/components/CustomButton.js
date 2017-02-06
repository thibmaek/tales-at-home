import React, { PropTypes } from 'react';
import Button from 'apsl-react-native-button';
import s from 'src/assets/styles/components/Buttons';

import capString from 'src/lib/capitalizeString';

const CustomButton = ({ type, color, onPress, content }) => {
  switch (type) {
  case `add`:
    return (
      <Button style={s.circleButton} textStyle={s.buttonTextWhite}
        onPress={onPress}>{ content }</Button>
    );
  case `menuButton`:
    return (
      <Button style={s.roundedButton} textStyle={s.buttonTextBlack}
      onPress={onPress}>{capString(content)}</Button>
    );
  case `submitButton`:
    return (
      <Button style={color === `green` ? s.roundedButtonGreen : s.roundedButtonBlue}
        textStyle={s.buttonTextWhite} onPress={onPress}>{capString(content)}</Button>
    );
  case `addMemberSmall`:
    return (
      <Button style={s.addButtonSmall} textStyle={s.addButtonText}
        onPress={onPress}>{capString(content)}</Button>
    );
  case `addMemberBig`:
    return (
      <Button style={s.addButtonBig} textStyle={s.addButtonText}
        onPress={onPress}>{capString(content)}</Button>
    );
  default:
    return (
      <Button style={s.circleButton} textStyle={s.circleButtonText}
        onPress={onPress}>{ content }</Button>
    );
  }
};

CustomButton.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
};

export default CustomButton;
