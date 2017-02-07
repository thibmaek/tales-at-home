import { StyleSheet } from 'react-native';
import {
  white, buttonShadowColor, seeThroughBlack, black, accentYellow, globalStyle,
} from 'src/assets/styles/vars';

export default StyleSheet.create({
  container: {
    width: 1024, height: 768,
    flex: 1, justifyContent: `center`, alignItems: `center`,
    position: `absolute`,
    right: - 20, // HACK: hardcoded op user
    zIndex: 5,
    backgroundColor: seeThroughBlack,
  },
  alertContainer: {
    flexDirection: `column`, alignItems: `center`, justifyContent: `center`,
    position: `relative`,
    backgroundColor: white,
    borderRadius: 5,
  },
  cross: {
    width: 15, height: 15,
    position: `absolute`, top: 18, right: 18,
    zIndex: 2,
  },
  title: {
    width: 420,
    marginTop: 20, marginBottom: 20,
    ...globalStyle, fontSize: 20, fontWeight: `bold`, textAlign: `center`,
    color: black,
  },
  message: {
    maxWidth: 300,
    ...globalStyle, textAlign: `center`, fontSize: 14, lineHeight: 18,
  },
  button: {
    alignSelf: `center`,
    height: 40, width: 150,
    marginTop: 25, marginBottom: 20,
    backgroundColor: accentYellow,
    borderWidth: 0, borderRadius: 50,
    shadowColor: buttonShadowColor, shadowOpacity: .2,
    shadowOffset: { width: 0, height: 14 }, shadowRadius: 14,
  },
  buttonText: {
    ...globalStyle, fontWeight: `bold`,
    color: white,
  },
});
