import { StyleSheet } from 'react-native';

import { accentYellow, lightBlue } from 'src/assets/styles/vars';

const sharedContainerRules = {
  flex: 1,
  justifyContent: `space-around`,
  flexDirection: `row`,
  alignItems: `center`,
};

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonsContainer: {
    ...sharedContainerRules,
  },
  professionalContainer: {
    flex: 1, justifyContent: `flex-end`,
    minHeight: 768,
    backgroundColor: lightBlue,
  },
  professionalInnerContainer: {
    paddingBottom: 80,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `center`,
  },
  char: {
    marginBottom: 110,
  },
  familyContainer: {
    flex: 1, justifyContent: `flex-end`,
    minHeight: 768,
    backgroundColor: accentYellow,
  },
  familyInnerContainer: {
    flexDirection: `column`,
    paddingBottom: 80,
    alignItems: `center`,
    justifyContent: `center`,
  },
  charsContainer: {
    ...sharedContainerRules,
    alignItems: `flex-start`,
  },
});
