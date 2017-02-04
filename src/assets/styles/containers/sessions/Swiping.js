import { StyleSheet } from 'react-native';
import {
  shadowColor,
  globalStyle, fontIsSubHeader, fontIsTitle,
  white, seeThroughBlack,
} from 'src/assets/styles/vars';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: `center`,
  },
  title: {
    position: `absolute`, top: 43, left: 384,
    ...globalStyle, ...fontIsSubHeader,
    color: white, backgroundColor: `transparent`,
  },
  image: {
    flex: 5,
    zIndex: - 1,
  },
  bar: {
    flex: 1,
    width: 1024,
    shadowColor,
    shadowOffset: { width: 0, height: - 1 },
    shadowRadius: 2,
    shadowOpacity: .25,
  },
  langs: {
    flex: 1, flexDirection: `row`,
    justifyContent: `space-around`,
    alignItems: `center`,
  },
  swipe: {
    position: `absolute`,
    width: 1024, height: 768,
    justifyContent: `center`,
    alignItems: `center`,
    zIndex: 2,
  },
  swipeTitle: {
    marginBottom: 96,
    ...globalStyle, fontSize: 50, fontWeight: `bold`,
    backgroundColor: `transparent`, color: white,
  },
  swipeImage: {
    width: 200, height: 200,
    borderRadius: 100,
  },
  dimmer: {
    width: 1024, height: 768,
    position: `absolute`, top: 0, left: 0,
    zIndex: 2,
    backgroundColor: seeThroughBlack,
  },
});
