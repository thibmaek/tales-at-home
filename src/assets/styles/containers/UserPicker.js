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
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `center`,
  },
  professionalChar: {
    marginBottom: 30,
  },
  familyContainer: {
    flex: 1, justifyContent: `flex-end`,
    minHeight: 768,
    backgroundColor: accentYellow,
  },
  familyInnerContainer: {
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `center`,
  },
  charsContainer: {
    ...sharedContainerRules,
    alignItems: `flex-start`,
  },
  button: {
    marginBottom: 80, marginTop: 80,
  },
});
