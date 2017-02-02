import { StyleSheet } from 'react-native';
import { globalStyle,
  white, accentRed, accentGreen, buttonShadowColor,
} from 'src/assets/styles/vars';

export default StyleSheet.create({
  buttonContainer: {
    position: `absolute`, bottom: 20, right: 30,
    zIndex: 4,
  },
  circleButton: {
    width: 35, height: 35,
    backgroundColor: accentRed,
    borderWidth: 0, borderRadius: 50,
    shadowColor: buttonShadowColor, shadowOpacity: .3,
    shadowOffset: { width: 0, height: 3 }, shadowRadius: 3,
  },
  circleButtonText: {
    ...globalStyle,
    fontWeight: `bold`,
    color: white,
  },
  button: {
    height: 35,
    paddingLeft: 20, paddingRight: 20,
    backgroundColor: accentGreen,
    borderWidth: 0, borderRadius: 50,
    shadowColor: buttonShadowColor, shadowOpacity: .3,
    shadowOffset: { width: 0, height: 3 }, shadowRadius: 3,
  },
  buttonText: {
    ...globalStyle,
    fontWeight: `bold`,
    color: white,
  },
});
