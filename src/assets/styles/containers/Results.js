import { StyleSheet } from 'react-native';
import { accentYellow, accentYellowDim, fontIsTitle } from 'src/assets/styles/vars';

export const avatar = {
  width: 110, height: 110,
  borderRadius: 55,
};

export const familyMember = {
  avatar,
  noAvatar: {
    ...avatar,
    alignItems: `center`,
    backgroundColor: accentYellowDim,
  },
  initials: {
    ...fontIsTitle, fontWeight: `bold`, fontFamily: `Bariol`,
    color: accentYellow,
  },
};

export const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  familyMembers: {
    flexDirection: `row`, justifyContent: `center`,
    marginTop: 55,
  },
});
