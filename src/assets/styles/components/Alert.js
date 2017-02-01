import { StyleSheet } from 'react-native';
import {
  white, buttonShadowColor, seeThroughBlack, black, accentYellow,
  globalStyle, fontIsTitle,
  } from 'src/assets/styles/vars';

export default StyleSheet.create({
  container: {
    width: 1024,
    height: 768,
    flex: 1,
    justifyContent: `center`,
    alignItems: `center`,
    position: `absolute`,
    zIndex: 5,
    backgroundColor: seeThroughBlack,
  },
  alertContainer: {
    position: `relative`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `center`,
    borderRadius: 5,
    backgroundColor: white,
  },
  cross: {
    width: 15,
    height: 15,
    position: `absolute`,
    top: 18,
    right: 18,
    zIndex: 2,
  },
  title: {
    ...globalStyle,
    ...fontIsTitle,
    width: 420,
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: `bold`,
    color: black,
  },
  message: {
    maxWidth: 300,
    ...globalStyle,
    ...fontIsTitle,
    textAlign: `center`,
    fontSize: 14,
    lineHeight: 18,
  },
  button: {
    height: 40,
    width: 150,
    alignSelf: `center`,
    marginTop: 25, marginBottom: 20,
    backgroundColor: accentYellow,
    borderWidth: 0, borderRadius: 50,
    shadowColor: buttonShadowColor, shadowOpacity: .2,
    shadowOffset: { width: 0, height: 14 }, shadowRadius: 14,
  },
  buttonText: {
    ...globalStyle,
    fontWeight: `bold`,
    color: white,
  },
});
