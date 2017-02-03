import { StyleSheet } from 'react-native';

import { globalStyle, accentBlue, darkGray } from 'src/assets/styles/vars';

export default StyleSheet.create({
  container: {
    flex: 1, justifyContent: `flex-start`, alignItems: `flex-start`,
    paddingLeft: 30,
    borderTopWidth: 3, borderTopColor: accentBlue,
  },
  header: {
    paddingTop: 20, paddingRight: 75, paddingLeft: 45,
    ...globalStyle, fontWeight: `bold`, textAlign: `center`,
  },
  details: {
    flex: 1,
    marginTop: 66,
  },
  members: {
    flex: 2,
  },
  headerDetails: {
    ...globalStyle,
  },
  headerMembers: {
    ...globalStyle,
  },
  detailInputs: {
    flex: 1, justifyContent: `space-around`,
    marginTop: 24,
  },
  input: { ...globalStyle },
  memberList: {
    flexDirection: `row`,
    justifyContent: `center`,
    paddingTop: 20,
  },
  addMemberButton: {
    width: 35, height: 35,
    marginRight: 10, marginLeft: 10,
    borderStyle: `dotted`, borderColor: darkGray,
  },
  addMemberButtonText: {
    ...globalStyle,
    color: darkGray,
  },
  addButton: {
    alignSelf: `center`,
  },
});
