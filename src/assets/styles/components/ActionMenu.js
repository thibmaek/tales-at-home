import { StyleSheet } from 'react-native';
import {
  black, accentRed, white,
  globalStyle, fontIsSubHeader,
} from 'src/assets/styles/vars';

export default StyleSheet.create({
  actionMenuContainer: {
    position: `absolute`, bottom: 20, right: 30,
    zIndex: 4,
    alignItems: `flex-end`,
    justifyContent: `flex-end`,
  },
  actionInnerMenuContainer: {
    alignItems: `flex-end`,
  },
  button: {
    paddingLeft: 20, paddingRight: 20,
    marginBottom: 10,
    backgroundColor: white,
    borderRadius: 50,
  },
  buttonText: {
    ...globalStyle, fontSize: 14,
    textAlign: `right`,
    color: black,
  },
  addButton: {
    justifyContent: `center`, alignItems: `center`,
    maxHeight: 40, maxWidth: 40, width: 40, height: 40,
    backgroundColor: accentRed,
    borderRadius: 50,
  },
  addButtonText: {
    ...globalStyle, ...fontIsSubHeader,
    textAlign: `center`,
    color: white,
  },
});
