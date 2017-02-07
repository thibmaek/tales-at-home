import { StyleSheet } from 'react-native';
import {
  mediumGray, lightBlack, globalStyle, fontIsLabel,
} from 'src/assets/styles/vars';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: `column`,
  },
  textButton: {
    marginTop: 20, marginBottom: 20,
    ...globalStyle,
    ...fontIsLabel,
    fontSize: 12, textAlign: `center`,
    color: mediumGray,
  },
  button: {
    marginBottom: 20,
  },
  inputContainer: {
    flex: 1,
    borderBottomColor: mediumGray, borderBottomWidth: 1, borderStyle: `solid`,
  },
  input: {
    height: 30,
    ...globalStyle,
    ...fontIsLabel,
    fontSize: 11, fontWeight: `normal`,
    color: mediumGray,
  },
  label: {
    marginBottom: 20, marginTop: 10,
    ...globalStyle,
    ...fontIsLabel,
    fontSize: 12, fontWeight: `bold`, textAlign: `center`,
    color: mediumGray,
  },
  code: {
    marginBottom: 15,
    ...globalStyle,
    ...fontIsLabel,
    fontSize: 50, fontWeight: `bold`, textAlign: `center`,
    color: lightBlack,
  },
});
