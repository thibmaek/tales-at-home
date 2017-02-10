import { StyleSheet } from 'react-native';
import { globalStyle, mediumGray, fontIsLabel } from 'src/assets/styles/vars';

export default StyleSheet.create({
  container: {
    flexDirection: `row`, flex: 2, justifyContent: `flex-end`, alignItems: `center`,
    marginRight: 20,
  },
  image: {
    width: 35, height: 35,
    marginRight: 6,
    borderRadius: 2.5,
  },
  text: {
    ...globalStyle, ...fontIsLabel,
    color: mediumGray,
  },
  alert: {
    right: 0,
  },
});
