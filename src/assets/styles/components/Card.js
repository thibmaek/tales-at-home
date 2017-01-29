import { StyleSheet } from 'react-native';
import { white, mediumGray, lightBlack, fontIsSubHeader } from 'src/assets/styles/vars';

export default StyleSheet.create({
  container: {
    marginLeft: 30,
    padding: 30,
    backgroundColor: white,
    borderRadius: 5, //needs correction
  },
  title: {
    ...fontIsSubHeader,
  },
  meta: {
    color: mediumGray,
  },
  content: {
    width: 205,
    color: lightBlack,
  },
  button: {},
});
