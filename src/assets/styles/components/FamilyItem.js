import { StyleSheet } from 'react-native';
import { globalStyle, highLightNeutral, fontIsSubHeader, darkGray } from 'src/assets/styles/vars';

const container = {
  flex: 1, flexDirection: `row`,
  paddingLeft: 30, paddingRight: 130, paddingBottom: 18, paddingTop: 18,
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
});
