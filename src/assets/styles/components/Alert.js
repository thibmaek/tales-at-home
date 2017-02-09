import { StyleSheet } from 'react-native';
import {
  white, seeThroughBlack, black, accentYellow,
  globalStyle, fontIsLabel,
} from 'src/assets/styles/vars';

export default StyleSheet.create({
  container: {
    width: 1024, height: 768,
    flex: 1, justifyContent: `center`, alignItems: `center`,
    position: `absolute`,
    right: 0,
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
    marginTop: 25, marginBottom: 20,
    backgroundColor: accentYellow,
  },
  buttonText: {
    ...globalStyle, ...fontIsLabel,
    color: white,
  },
});
