import { StyleSheet } from 'react-native';
import { globalStyle, fontIsTitle } from 'src/assets/styles/vars';

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
  isLoading: {
    flexDirection: `row`,
    marginTop: 40,
  },
  loadingText: {
    marginLeft: 20,
    ...globalStyle, ...fontIsTitle, fontWeight: `bold`,
  },
});
