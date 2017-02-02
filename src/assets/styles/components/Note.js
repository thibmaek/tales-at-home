import { StyleSheet } from 'react-native';
import {
  white, buttonShadowColor, blackDim, lightBlack, lightGray,
  globalStyle, fontIsTitle,
} from 'src/assets/styles/vars';

export default StyleSheet.create({
  optionButtonContainer: {
    flex: 1,
    position: `absolute`, bottom: 65, right: 30,
    zIndex: 10,
    backgroundColor: blackDim,
  },
  optionButton: {
    height: 35,
    paddingLeft: 20, paddingRight: 20,
    borderWidth: 0, borderRadius: 50,
    backgroundColor: white,
    shadowColor: buttonShadowColor, shadowOpacity: .2,
    shadowOffset: { width: 0, height: 14 }, shadowRadius: 14,
  },
  container: {
    marginBottom: 10,
    backgroundColor: white,
    borderWidth: 0, borderRadius: 5,
    shadowColor: buttonShadowColor, shadowOpacity: .2,
    shadowOffset: { width: 0, height: 14 }, shadowRadius: 14,
  },
  titleContainer: {
    width: 687, height: 45,
    flex: 1, flexDirection: `row`,
    paddingLeft: 20, paddingRight: 20,
    borderBottomColor: lightGray, borderBottomWidth: 1,
  },
  title: {
    flex: 1,
    ...globalStyle, ...fontIsTitle, fontSize: 18, textAlign: `left`, fontWeight: `bold`,
    color: lightBlack,
  },
  cross: {
    position: `absolute`, top: 18, right: 20,
    width: 15, height: 15,
    zIndex: 2,
  },
  contentContainer: { paddingBottom: 20 },
  content: {
    width: 687, minHeight: 150,
    paddingBottom: 20, paddingLeft: 20, paddingRight: 20, paddingTop: 20,
    ...globalStyle, ...fontIsTitle, textAlign: `left`, fontSize: 14, lineHeight: 18,
    textAlignVertical: `top`,
    color: lightGray,
  },
});