import { StyleSheet } from 'react-native';
import { globalStyle,
  white, accentRed, accentGreen, buttonShadowColor,
  fontIsHeader,
} from 'src/assets/styles/vars';

export default StyleSheet.create({
  actionContainer: {
    position: `absolute`, bottom: 20, right: 30,
    zIndex: 4,
  },
  optionContainer: {
    flex: 1, flexDirection: `column`, justifyContent: `space-around`,
    borderWidth: 0, borderRadius: 5,
    padding: 20,
    backgroundColor: white,
    marginBottom: 20,
    shadowColor: buttonShadowColor, shadowOpacity: .3,
    shadowOffset: { width: 0, height: 3 }, shadowRadius: 3,
  },
  headerBar: {
    flex: 1, flexDirection: `row`,
  },
  closeButton: {
    width: 15,
    height: 15,
  },
  title: {
    flex: 1,
    ...globalStyle,
    ...fontIsHeader,
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
