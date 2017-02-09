import { StyleSheet } from 'react-native';
import { globalStyle, accentBlue, fontIsLabel, darkGray, white } from 'src/assets/styles/vars';

export default StyleSheet.create({
  familyContainer: {
    flex: 1,
    padding: 30,
    borderTopWidth: 3, borderTopColor: accentBlue,
  },
  headerTitle: {
    ...globalStyle,
    fontWeight: `bold`,
    textAlign: `center`,
  },
  subTitle: {
    fontFamily: `Bariol`, fontWeight: `bold`, fontSize: 12,
    color: darkGray,
  },
  genInfoContainer: {
    marginTop: 20,
  },
  famMembersContainer: {
    flex: 1,
    marginTop: 40,
  },
  textInput: {
    height: 25,
    marginTop: 15, paddingBottom: 5,
    ...globalStyle, fontSize: 14,
    borderBottomWidth: 1, borderBottomColor: darkGray,
  },
  textBox: {
    height: 60,
    marginTop: 15, paddingBottom: 5,
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
    paddingTop: 10,
    ...globalStyle, fontSize: 14,
    color: darkGray,
  },
  addMemberFormContainer: {
    padding: 20,
    borderWidth: 1, borderColor: darkGray, borderRadius: 5,
  },
  rectangleButton: {
    backgroundColor: darkGray,
  },
  button: {
    backgroundColor: accentBlue,
  },
  buttonText: {
    ...globalStyle, ...fontIsLabel,
    color: white,
  },
});
