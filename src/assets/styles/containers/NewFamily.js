import { StyleSheet } from 'react-native';
import { globalStyle, accentBlue, darkGray } from 'src/assets/styles/vars';

export default StyleSheet.create({
  familyContainer: {
    flex: 1,
    padding: 30,
    borderTopWidth: 3, borderTopColor: accentBlue,
  },
  headerTitle: {
    ...globalStyle, fontWeight: `bold`, textAlign: `center`,
  },
  subTitle: {
    fontFamily: `Bariol`, fontWeight: `bold`, color: darkGray, fontSize: 12,
  },
  genInfoContainer: {
    marginTop: 20,
  },
  famMembersContainer: {
    flex: 1,
    marginTop: 40,
  },
  textInput: {
    marginTop: 15, paddingBottom: 5,
    height: 25,
    ...globalStyle, fontSize: 14,
    borderBottomWidth: 1, borderBottomColor: darkGray,
  },
  textBox: {
    marginTop: 15, paddingBottom: 5,
    height: 60,
    ...globalStyle, fontSize: 14,
    borderBottomWidth: 1, borderBottomColor: darkGray,
  },
  famMembersContent: {
    flexDirection: `column`,
    marginTop: 20,
  },
  addMemberContainer: {
    flexDirection: `row`,
  },
  newMemberText: {
    ...globalStyle, color: darkGray, fontSize: 14,
    paddingTop: 10,
  },
  addMemberFormContainer: {
    padding: 20,
    borderWidth: 1, borderColor: darkGray, borderRadius: 5,
  },
});
