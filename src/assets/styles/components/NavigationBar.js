import { StyleSheet } from 'react-native';
import { globalStyle, fontIsHeader, white, lightGray, shadowColor } from 'src/assets/styles/vars';

export default StyleSheet.create({
  navbar: {
    flexDirection: `row`, alignItems: `center`,
    height: 50,
    paddingLeft: 20, paddingRight: 20,
    zIndex: 2,
    backgroundColor: white,
    shadowColor, shadowRadius: 4, shadowOffset: { width: 2 }, shadowOpacity: .09,
  },
  leftNav: {
    flexDirection: `row`,
    flex: 2,
    justifyContent: `space-around`,
  },
  title: {
    flex: 1,
    ...globalStyle, ...fontIsHeader,
  },
  input: {
    flex: 3,
    ...globalStyle,
    color: lightGray,
  },
});
