import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: `row`,
    flex: 2,
    justifyContent: `flex-end`,
    alignItems: `center`,
    marginRight: 20,
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 2.5,
    marginRight: 6,
  },
  text: {
    color: `rgba(155, 155, 155, 1)`,
    fontSize: 14,
    fontWeight: `bold`,
  },
});
