import { StyleSheet } from 'react-native';
import {
  globalStyle,
  white, black, accentRed, accentBlue, accentGreen, darkGray,
  buttonShadowColor,
} from 'src/assets/styles/vars';

const globalRoundedButtonStyle = {
  height: 35,
  minWidth: 180,
  paddingLeft: 20, paddingRight: 20,
  backgroundColor: white,
  borderWidth: 0, borderRadius: 50,
  shadowColor: buttonShadowColor, shadowOpacity: .3,
  shadowOffset: { width: 0, height: 3 }, shadowRadius: 3,
};

export default StyleSheet.create({
  roundedButton: {
    ...globalRoundedButtonStyle,
  },
  roundedButtonGreen: {
    ...globalRoundedButtonStyle,
    backgroundColor: accentGreen,
  },
  roundedButtonBlue: {
    ...globalRoundedButtonStyle,
    backgroundColor: accentBlue,
  },
  disabledSubmitButton: {
    ...globalRoundedButtonStyle,
    shadowOpacity: 0,
    backgroundColor: darkGray,
  },
  circleButton: {
    alignSelf: `flex-end`,
    width: 35, height: 35,
    backgroundColor: accentRed,
    borderWidth: 0, borderRadius: 50,
    shadowColor: buttonShadowColor, shadowOpacity: .3,
    shadowOffset: { width: 0, height: 3 }, shadowRadius: 3,
  },
  addButtonSmall: {
    width: 35, height: 35,
    marginRight: 10,
    borderStyle: `dotted`, borderColor: darkGray,
  },
  addButtonBig: {
    width: 98, height: 98,
    borderStyle: `dotted`, borderColor: darkGray,
  },
  addButtonText: {
    ...globalStyle,
  },
  circleButtonText: {
    ...globalStyle, fontWeight: `bold`,
    color: white,
  },
  buttonTextWhite: {
    ...globalStyle,
    color: white,
  },
  buttonTextBlack: {
    ...globalStyle,
    color: black,
  },
});
