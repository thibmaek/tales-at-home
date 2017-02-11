import { StyleSheet } from 'react-native';
import { globalStyle, white, fontIsTitle } from 'src/assets/styles/vars';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    alignItems: `center`,
  },
  titleContainer: {
    marginBottom: 90,
    marginTop: 40,
  },
  title: {
    ...globalStyle, fontSize: 16, letterSpacing: 2, textAlign: `center`,
    color: white, backgroundColor: `transparent`,
  },
  introContainer: {
    width: 200,
    marginBottom: 30,
  },
  intro: {
    ...globalStyle, fontSize: 16, lineHeight: 24, textAlign: `center`,
    color: white, backgroundColor: `transparent`,
  },
  inputContainer: {
    width: 280,
    height: 40,
  },
  input: {
    height: 40,
    ...globalStyle, ...fontIsTitle,
  },
});
