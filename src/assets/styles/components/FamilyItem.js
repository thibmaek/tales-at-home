import { StyleSheet } from 'react-native';
import { globalStyle,
  highLightNeutral, white, accentYellow, darkGray,
  fontIsSubHeader } from 'src/assets/styles/vars';

const container = {
  flex: 1, flexDirection: `row`,
  paddingLeft: 30, paddingRight: 130, paddingBottom: 18, paddingTop: 18,
  backgroundColor: white,
};

export default StyleSheet.create({
  container,
  highlightedContainer: {
    ...container,
    backgroundColor: highLightNeutral,
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
    ...globalStyle, ...fontIsSubHeader,
  },
  name: {
    flex: 1,
    ...globalStyle,
    color: darkGray,
  },
  archiveRow: {
    flex: 1,
    paddingLeft: 15,
    backgroundColor: accentYellow,
  },
  archiveButton: {
    alignItems: `center`, justifyContent: `center`,
    position: `absolute`, top: 0, right: 0, bottom: 0,
    width: 75,
  },
  buttonText: {
    ...globalStyle,
    color: white,
  },
});
