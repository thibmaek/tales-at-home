import { StyleSheet } from 'react-native';
import {
  white, lightBlack, black, lightGray,
  globalStyle, fontIsLabel,
} from 'src/assets/styles/vars';

export default StyleSheet.create({
  container: {
    flexDirection: `row`,
    marginTop: 10, marginBottom: 10,
    backgroundColor: white,
    borderColor: lightGray, borderWidth: 1, borderRadius: 5,
  },
  imageContainer: {
    width: 140, height: 70,
    backgroundColor: black,
  },
  textContainer: {
    width: 230,
    flex: 1, flexDirection: `column`,
    paddingLeft: 10, paddingTop: 10, paddingBottom: 10, paddingRight: 10,
    backgroundColor: white,
  },
  title: {
    ...globalStyle, ...fontIsLabel, textAlign: `left`,
    color: lightBlack,
  },
  description: {
    ...globalStyle, textAlign: `left`, fontSize: 11, lineHeight: 16, fontWeight: `normal`,
    color: black,
  },
});
