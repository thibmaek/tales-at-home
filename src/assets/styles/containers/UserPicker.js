import { StyleSheet } from 'react-native';

import { lightBlue } from 'src/assets/styles/vars';

const sharedContainerRules = {
  flex: 1,
  justifyContent: `space-around`,
  flexDirection: `row`,
  alignItems: `center`,
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightBlue,
  },
  buttonsContainer: {
    ...sharedContainerRules,
  },
  charsContainer: {
    ...sharedContainerRules,
    alignItems: `flex-start`,
  },
});
