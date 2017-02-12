import { StyleSheet } from 'react-native';
import { globalStyle, accentBlue, white, shadowColorGray } from 'src/assets/styles/vars';

export default StyleSheet.create({
  sidebar: {
    flexDirection: `column`, justifyContent: `space-between`,
    minWidth: 276,
    zIndex: 8,
    backgroundColor: white,
    shadowColor: shadowColorGray, shadowOffset: { width: 2.5, height: 5 }, shadowOpacity: .5,
  },
  children: {
    flex: 10,
  },
  buttonBg: {
    flexShrink: 1,
    backgroundColor: accentBlue,
    borderRadius: 0, borderColor: 0,
  },
  buttonText: {
    paddingBottom: 5, paddingTop: 5,
    ...globalStyle, textAlign: `center`,
    color: white,
  },
});
