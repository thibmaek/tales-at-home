import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: `column`,
    flex: 1,
    justifyContent: `flex-start`,
    backgroundColor: `rgba(248, 248, 248, 1)`,
  },
  view: {
    flexDirection: `row`,
    flex: 1,
    position: `relative`,
  },
  sideBar: {
    zIndex: 2,
    position: `absolute`,
    left: 0,
    top: 0,
  },
  results: {
    zIndex: 1,
    position: `absolute`,
    left: 400,
    top: 0,
  },
  actionButton: {
    zIndex: 3,
    position: `absolute`,
  },
});
