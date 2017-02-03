import { StyleSheet } from 'react-native';
import { globalStyle, fontIsTitle,
  white, lightGray, lightBlack, buttonShadowColor,
} from 'src/assets/styles/vars';

export default StyleSheet.create({
  addNoteContainer: {
    flex: 1,
    borderWidth: 0, borderRadius: 10,
    //padding: 20,
    backgroundColor: white,
    marginBottom: 20,
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
    ...globalStyle, ...fontIsTitle, fontSize: 18, textAlign: `left`, fontWeight: `bold`,
    paddingLeft: 20,
    color: lightBlack,
  },
  cross: {
    width: 15, height: 15,
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
