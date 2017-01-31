import { StyleSheet } from 'react-native';
import {
  globalStyle,
  white, mediumGray, lightBlack,
  fontIsSubHeader,
} from 'src/assets/styles/vars';

export default StyleSheet.create({
  container: {
    marginLeft: 30,
    padding: 30,
    backgroundColor: white,
    borderRadius: 10,
  },
  title: {
    ...globalStyle,
    ...fontIsSubHeader,
  },
  meta: {
    ...globalStyle,
    color: mediumGray,
  },
  content: {
    ...globalStyle,
    width: 205,
    color: lightBlack,
  },
  buttonText: {
    ...globalStyle,
    fontWeight: `bold`,
  },
});
