import { StyleSheet } from 'react-native';
import {
  globalStyle,
  white, mediumGray, lightBlack,
  fontIsSubHeader, 
} from 'src/assets/styles/vars';

export default StyleSheet.create({
  container: {
    width: 280,
    position: `relative`,
    marginLeft: 30,
    backgroundColor: white,
    borderRadius: 10,
  },
  innerContainer: {
    position: `absolute`, top: 0, zIndex: 3,
    borderRadius: 10, borderWidth: 10, borderColor: white, borderBottomWidth: 0,
    shadowColor: white, shadowOpacity: 1, shadowOffset: { width: 0, height: 20 }, shadowRadius: 7,
  },
  title: {
    ...globalStyle,
    ...fontIsSubHeader,
    fontSize: 14,
    paddingLeft: 20, paddingRight: 20, paddingTop: 20,
    borderRadius: 10,
  },
  meta: {
    ...globalStyle,
    fontSize: 11,
    paddingLeft: 20, paddingRight: 20, paddingBottom: 3,
    marginTop: 5,
    color: mediumGray,
  },
  contentScrollView: {
    marginRight: 10, marginTop: 60,
    paddingTop: 23,
  },
  content: {
    ...globalStyle,
    paddingLeft: 30, paddingRight: 20,
    fontSize: 14,
    lineHeight: 18,
    color: lightBlack,
  },
  buttonText: {
    ...globalStyle,
    fontWeight: `bold`,
  },
  button: {
    borderWidth: 0,
    shadowColor: white, shadowOpacity: 1, shadowRadius: 10,
    shadowOffset: { width: 0, height: - 25 },
    backgroundColor: white,
  },
});
