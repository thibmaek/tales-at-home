import { StyleSheet } from 'react-native';
import {
  white, lightBlack, blackDim, black, lightGray,
  globalStyle, fontIsTitle,
  } from 'src/assets/styles/vars';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: blackDim,
    borderColor: lightGray,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: `row`,
  },
  imageContainer: {
    width: 140,
    height: 68,
    backgroundColor: black,
  },
  textContainer: {
    width: 230,
    flex: 1, flexDirection: `column`,
    paddingLeft: 10, paddingTop: 10, paddingBottom: 10, paddingRight: 10,
    backgroundColor: white,
  },
  title: {
    ...globalStyle,
    ...fontIsTitle,
    textAlign: `left`,
    fontSize: 14,
    fontWeight: `bold`,
    color: lightBlack,
  },
  description: {
    ...globalStyle,
    ...fontIsTitle,
    textAlign: `left`,
    fontSize: 11,
    lineHeight: 16,
    fontWeight: `normal`,
    color: black,
  },
});
