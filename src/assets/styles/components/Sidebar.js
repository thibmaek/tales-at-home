import { StyleSheet } from 'react-native';

export const sidebar = {
  paddingRight: 100,
  shadowColor: `rgb(188, 188, 188)`,
  shadowOffset: { width: 2.5, height: 5 },
  shadowOpacity: .5,
};

export const familyItem = StyleSheet.create({
  container: {
    flexDirection: `row`,
    flex: 1,
    paddingLeft: 30,
    paddingBottom: 18,
    paddingTop: 18,
  },
  image: {
    borderRadius: 2.5,
    flexGrow: 1,
    width: 47,
    height: 47,
  },
  textContainer: {
    flexGrow: 1,
    flexDirection: `column`,
    marginLeft: 20,
  },
  label: {
    flex: 1,
    fontSize: 18,
    fontWeight: `bold`,
  },
  name: {
    flex: 1,
    color: `rgba(188, 188, 188, 1)`,
  },
});
