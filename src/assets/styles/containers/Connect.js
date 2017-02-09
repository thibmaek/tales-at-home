import { StyleSheet } from 'react-native';
import { globalStyle, fontIsHeader, white } from 'src/assets/styles/vars';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: `column`,
  },
  title: {
    flex: 1,
    marginTop: 100,
    ...globalStyle, ...fontIsHeader, textAlign: `center`,
    color: white, backgroundColor: `transparent`,
  },
  input: {
    flex: 13,
    fontSize: 100, textAlign: `center`,
    color: white,
  },
});
