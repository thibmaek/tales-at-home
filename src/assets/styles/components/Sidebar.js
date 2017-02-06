import { StyleSheet } from 'react-native';
import { globalStyle, accentBlue, white, shadowColorGray } from 'src/assets/styles/vars';

export default StyleSheet.create({
  sidebar: {
    width: 276,
    zIndex: 99,
    backgroundColor: white,
    shadowColor: shadowColorGray,
    shadowOffset: { width: 2.5, height: 5 },
    shadowOpacity: .5,
  },
  buttonBg: {
    height: 50,
    marginBottom: 0,
    backgroundColor: accentBlue,
    borderRadius: 0, borderColor: 0,
  },
  buttonText: {
    ...globalStyle,
    color: white,
    textAlign: `center`,
  },
});
