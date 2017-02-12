import { StyleSheet } from 'react-native';
import {
  white, seeThroughBlack, black, accentYellow,
  globalStyle, fontIsLabel,
} from 'src/assets/styles/vars';

const globalContainer = {
  width: 1024, height: 768,
  flex: 1, justifyContent: `center`, alignItems: `center`,
  position: `absolute`,
  zIndex: 10,
  backgroundColor: seeThroughBlack,
};

export default StyleSheet.create({
  containerLeft: {
    ...globalContainer,
    left: 0,
  },
  containerRight: {
    ...globalContainer,
    right: 0,
  },
  alertContainer: {
    flexDirection: `column`, alignItems: `center`, justifyContent: `center`,
    position: `relative`,
    backgroundColor: white,
    borderRadius: 5,
  },
  crossContainer: {
    width: 15, height: 15, maxWidth: 15, maxHeight: 15,
    position: `absolute`, top: 18, right: 18,
    zIndex: 2,
  },
  cross: {
    width: 15, height: 15, maxWidth: 15, maxHeight: 15,
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
