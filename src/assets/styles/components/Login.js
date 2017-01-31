import { StyleSheet } from 'react-native';
import { white, fontIsTitle, fontIsLabel } from 'src/assets/styles/vars';

export default StyleSheet.create({
  container: {
    flexDirection: `column`,
    flex: 1,
  },
  loginContainer: {
    flexDirection: `column`, alignItems: `center`,
    flex: 1,
  },
  loginTopContainer: {
    flexDirection: `column`, alignItems: `center`, justifyContent: `center`,
    flex: 1,
  },
  title: {
    marginBottom: 75,
    ...fontIsTitle,
    color: white,
    fontSize: 50,
    fontWeight: `bold`,
    backgroundColor: `transparent`,
  },
  textInput: {
    width: 280,
    marginBottom: 20,
    borderBottomColor: white,
    borderBottomWidth: 1,
    borderStyle: `solid`,
  },
  input: {
    height: 30,
    color: white,
  },
  button: {
    width: 280,
    backgroundColor: white,
    borderWidth: 0,
    borderRadius: 50,
  },
  annonLogin: {
    borderBottomColor: white,
    borderBottomWidth: 0.5,
    borderStyle: `solid`,
    marginBottom: 50,
    backgroundColor: `transparent`,
  },
  underlineLink: {
    ...fontIsLabel,
    color: white,
    fontWeight: `normal`,
    fontSize: 11,
  },
});
