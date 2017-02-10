import { StyleSheet } from 'react-native';
import {
  globalStyle, fontIsSubHeader, fontIsLabel,
  white, lightGray, lightBlack, buttonShadowColor, accentGreen,
} from 'src/assets/styles/vars';

export default StyleSheet.create({
  addNoteContainer: {
    marginBottom: 20,
    flex: 1,
    backgroundColor: white,
    borderWidth: 0, borderRadius: 10,
    shadowColor: buttonShadowColor, shadowOpacity: .3,
    shadowOffset: { width: 0, height: 3 }, shadowRadius: 3,
  },
  headerBar: {
    flex: 1, flexDirection: `row`,
    width: 687, height: 45,
    borderBottomColor: lightGray, borderBottomWidth: 1,
  },
  title: {
    flex: 1,
    paddingLeft: 20,
    ...globalStyle, ...fontIsSubHeader, textAlign: `left`,
    color: lightBlack,
  },
  cross: {
    width: 15, height: 15,
    marginRight: 15, marginTop: 15,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  content: {
    width: 687, minHeight: 150,
    paddingBottom: 20, paddingLeft: 20, paddingRight: 20, paddingTop: 20,
    ...globalStyle, textAlign: `left`, fontSize: 14, lineHeight: 18, textAlignVertical: `top`,
    color: lightBlack,
  },
  button: {
    backgroundColor: accentGreen,
  },
  buttonText: {
    ...globalStyle, ...fontIsLabel,
    color: white,
  },
});
