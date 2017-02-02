import { StyleSheet } from 'react-native';
import {
  white, lightBlack, blackDim, black, lightGray,
  globalStyle, fontIsTitle,
  } from 'src/assets/styles/vars';

  // Order: flex, margin, padding, fonts, colors, rest…

export default StyleSheet.create({
  container: {
    flex: 1, flexDirection: `row`,
    marginTop: 10, marginBottom: 10,
    backgroundColor: white,
    borderColor: lightGray,
    borderWidth: 1,
    borderRadius: 5,
  },
  imageContainer: {
    width: 140,
    height: 70,
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
