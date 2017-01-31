import { StyleSheet } from 'react-native';
import { fontIsTitle } from 'src/assets/styles/vars';

export default StyleSheet.create({
  loadingView: {
    flex: 1,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  loadingChar: {
    width: 256,
    height: 256,
  },
  loadingText: {
    ...fontIsTitle, textAlign: `center`,
    marginTop: 40,
  },
});
