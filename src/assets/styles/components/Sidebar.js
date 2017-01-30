import { StyleSheet } from 'react-native';
import { accentBlue, white, darkGray, fontIsSubHeader, shadowColorGray } from 'src/assets/styles/vars';

export const sidebar = {
  zIndex: 3,
  backgroundColor: white,
  shadowColor: shadowColorGray,
  shadowOffset: { width: 2.5, height: 5 },
  shadowOpacity: .5,
};

export const button = StyleSheet.create({
  bg: {
    flexGrow: 1,
    marginBottom: 0,
    backgroundColor: accentBlue,
    borderRadius: 0,
    borderColor: 0,
  },
  text: {
    color: white,
    textAlign: `center`,
  },
});

export const familyItem = StyleSheet.create({
  container: {
    flex: 1, flexDirection: `row`,
    paddingLeft: 30, paddingRight: 130, paddingBottom: 18, paddingTop: 18,
  },
  image: {
    flexGrow: 1,
    width: 47, height: 47,
    borderRadius: 2.5,
  },
  textContainer: {
    flexDirection: `column`, flexGrow: 1,
    marginLeft: 20,
  },
  label: {
    flex: 1,
    ...fontIsSubHeader,
  },
  name: {
    flex: 1,
    color: darkGray,
  },
});
