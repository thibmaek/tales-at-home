import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  navbar: {
    flexDirection: `row`,
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: `center`,
    shadowColor: `black`,
    shadowOffset: { width: 2 },
    shadowOpacity: .09,
    shadowRadius: 4,
  },
  rightNav: {
    flexDirection: `row`,
    justifyContent: `space-around`,
    flex: 2,
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: `bold`,
  },
  input: {
    flex: 3,
    color: `rgba(220, 221, 225, 1)`,
  },
});
