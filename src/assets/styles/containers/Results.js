import { StyleSheet } from 'react-native';
import {
  globalStyle,
  accentYellow, accentYellowDim,
  fontIsTitle, fontIsSubHeader,
} from 'src/assets/styles/vars';

export const avatar = {
  width: 110, height: 110,
  borderRadius: 55,
  marginBottom: 13,
};

export const familyMember = {
  container: { paddingLeft: 30 },
  avatar,
  noAvatar: {
    ...avatar,
    alignItems: `center`,
    backgroundColor: accentYellowDim,
  },
  initials: {
    marginTop: 40,
    ...fontIsTitle, fontWeight: `bold`, fontFamily: `Bariol`,
    color: accentYellow,
  },
  language: {
    ...globalStyle,
    textAlign: `center`,
  },
  name: {
    ...globalStyle,
    ...fontIsSubHeader,
    textAlign: `center`,
  },
};

export const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: `center`,
  },
  familyMembers: {
    flexDirection: `row`, justifyContent: `center`,
    marginTop: 55,
  },
  notes: {
    flex: 1,
    marginTop: 43,
    marginBottom: 50,
  },
  noNotesText: {
    marginTop: 43,
    ...globalStyle,
  },
});
