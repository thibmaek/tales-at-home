import { StyleSheet } from 'react-native';
import { white, globalStyle, fontIsTitle } from 'src/assets/styles/vars';

export default StyleSheet.create({
  sessionOptionContainer: {
    paddingBottom: 10, paddingTop: 20, paddingLeft: 20, paddingRight: 20,
    marginBottom: 10,
    borderRadius: 6,
    backgroundColor: white,
  },
  headerBar: {
    flex: 1,
    flexDirection: `row`,
    justifyContent: `space-between`,
  },
  title: {
    flex: 1,
    ...globalStyle,
    ...fontIsTitle,
    fontSize: 20, textAlign: `left`, fontWeight: `bold`,
  },
  cross: {
    flex: 1,
    maxWidth: 15, maxHeight: 15,
  },
});
