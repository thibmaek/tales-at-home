import { StyleSheet } from 'react-native';
import { white, globalStyle, buttonShadowColor, fontIsTitle } from 'src/assets/styles/vars';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    shadowColor: buttonShadowColor, shadowOpacity: .1,
    shadowOffset: { width: 0, height: 14 }, shadowRadius: 6,
  },
  sessionOptionContainer: {
    paddingBottom: 10, paddingTop: 20, paddingLeft: 20, paddingRight: 20,
    borderRadius: 6,
    backgroundColor: white,
  },
  headerBar: {
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
