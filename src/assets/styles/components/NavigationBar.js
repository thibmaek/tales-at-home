import { StyleSheet } from 'react-native';
import { white, lightGray, fontIsHeader, shadowColor } from 'src/assets/styles/vars';

export default StyleSheet.create({
  navbar: {
    flexDirection: `row`, alignItems: `center`,
    height: 50,
    paddingLeft: 20, paddingRight: 20,
    zIndex: 2,
    backgroundColor: white,
    shadowColor, shadowRadius: 4, shadowOffset: { width: 2 }, shadowOpacity: .09,
  },
  rightNav: {
    flexDirection: `row`,
    flex: 2,
    justifyContent: `space-around`,
  },
  title: {
    flex: 1,
    ...fontIsHeader,
  },
  input: {
    flex: 3,
    color: lightGray,
  },
});
