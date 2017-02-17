import { StyleSheet } from 'react-native';
import {
  black, mediumGray, lightBlack, accentGreen, white, globalStyle, fontIsLabel,
} from 'src/assets/styles/vars';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: `column`,
  },
  textButton: {
    marginTop: 20, marginBottom: 20,
    ...globalStyle,
    fontSize: 12, textAlign: `center`,
    color: mediumGray,
  },
  button: {
    marginBottom: 20,
    backgroundColor: accentGreen,
  },
  buttonText: {
    ...globalStyle, ...fontIsLabel,
    color: white,
  },
  inputContainer: {
    flex: 1,
    borderBottomColor: mediumGray, borderBottomWidth: 1, borderStyle: `solid`,
  },
  input: {
    height: 30,
    ...globalStyle,
    fontSize: 16, fontWeight: `bold`,
    color: black,
  },
  label: {
    marginBottom: 20, marginTop: 10,
    ...globalStyle,
    fontSize: 12, fontWeight: `bold`, textAlign: `center`,
    color: mediumGray,
  },
  code: {
    marginBottom: 15,
    ...globalStyle,
    fontSize: 50, fontWeight: `bold`, textAlign: `center`,
    color: lightBlack,
  },
});
