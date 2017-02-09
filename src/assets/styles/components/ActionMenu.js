import { StyleSheet } from 'react-native';
import { black, accentRed, white, globalStyle, fontIsLabel } from 'src/assets/styles/vars';

export default StyleSheet.create({
  actionMenuContainer: {
    position: `absolute`, bottom: 20, right: 30,
    zIndex: 4,
  },
  button: {
    marginBottom: 10,
    backgroundColor: white,
  },
  buttonText: {
    ...globalStyle, fontSize: 14,
    color: black,
  },
  addButton: {
    backgroundColor: accentRed,
  },
  addButtonText: {
    ...globalStyle, ...fontIsLabel,
    color: white,
  },
});
