import { StyleSheet } from 'react-native';
import { globalStyle, fontIsHeader, fontIsLabel,
  white, lightGray, lightBlack, shadowColor } from 'src/assets/styles/vars';

const navbar = {
  flexDirection: `row`, alignItems: `center`,
  height: 50,
  paddingLeft: 20,
  paddingRight: 20,
  zIndex: 2,
};

export default StyleSheet.create({
  transparentNavbar: {
    ...navbar,
    backgroundColor: `transparent`,
  },
  navbar: {
    ...navbar,
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
  backTitle: {
    //textAlign: `center`,
    ...globalStyle, ...fontIsLabel,
    color: lightBlack,
  },
});
