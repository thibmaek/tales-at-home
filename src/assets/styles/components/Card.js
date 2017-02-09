import { StyleSheet } from 'react-native';
import { globalStyle, fontIsLabel, white, mediumGray, lightBlack } from 'src/assets/styles/vars';

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
    fontSize: 14, fontWeight: `bold`,
    paddingLeft: 20, paddingRight: 20, paddingTop: 20,
    borderRadius: 10,
  },
  meta: {
    paddingLeft: 20, paddingRight: 20, paddingBottom: 3,
    marginTop: 5,
    ...globalStyle, fontSize: 11,
    color: mediumGray,
  },
  contentScrollView: {
    marginRight: 10, marginTop: 60,
    paddingTop: 23,
  },
  content: {
    paddingLeft: 30, paddingRight: 20,
    ...globalStyle, fontSize: 14, lineHeight: 18,
    color: lightBlack,
  },
  button: {
    backgroundColor: white,
  },
  buttonText: {
    ...globalStyle,
    ...fontIsLabel,
  },
});
