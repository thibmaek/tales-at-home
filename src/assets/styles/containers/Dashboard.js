import { StyleSheet } from 'react-native';
import { seeThroughBlack, globalStyle, lightGray } from 'src/assets/styles/vars';

export default StyleSheet.create({
  container: {
    flexDirection: `column`, flex: 1, justifyContent: `flex-start`,
    backgroundColor: `rgba(248, 248, 248, 1)`,
  },
  view: {
    flexDirection: `row`,
    flex: 1,
  },
  dimmed: {
    width: 1024, height: 768,
    position: `absolute`, top: 0, left: 0,
    zIndex: 10,
    backgroundColor: seeThroughBlack,
  },
  actionButton: {
    position: `absolute`,
    zIndex: 3,
  },
  noFamily: {
    height: 50,
    backgroundColor: lightGray,
    justifyContent: `center`,
  },
  noFamilyText: {
    ...globalStyle,
    fontSize: 14,
    textAlign: `center`,
  },
});
