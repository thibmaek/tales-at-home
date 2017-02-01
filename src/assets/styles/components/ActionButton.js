import { StyleSheet } from 'react-native';
import { globalStyle, white, accentBlue, accentRed } from 'src/assets/styles/vars';

export default StyleSheet.create({
  buttonContainer: {
    width: 65, height: 65,
    position: `absolute`, bottom: 0, right: 0,
    zIndex: 4,
  },
  circleButton: {
    width: 35, height: 35,
    backgroundColor: accentRed,
    borderWidth: 0, borderRadius: 50,
  },
  circleButtonText: {
    ...globalStyle,
    fontWeight: `bold`,
    color: white,
  },
  button: {
    width: 280,
    backgroundColor: white,
    borderWidth: 0, borderRadius: 50,
  },
  buttonText: {
    ...globalStyle,
    fontWeight: `bold`,
    color: accentBlue,
  },
});
