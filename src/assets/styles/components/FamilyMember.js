import { StyleSheet } from 'react-native';
import { globalStyle, white, lightGray, darkGray,
  accentYellow, accentBlue, accentRed } from 'src/assets/styles/vars';

import pick from 'src/lib/pickArr';

const rnd = pick([accentBlue, accentRed, accentYellow]);

export default StyleSheet.create({
  container: {
    flexDirection: `row`,
    marginBottom: 10,
  },
  initialContainer: {
    marginRight: 10,
    justifyContent: `center`, alignItems: `center`,
    width: 35, height: 35,
    backgroundColor: rnd,
    borderRadius: 5,
  },
  text: {
    ...globalStyle, color: white,
  },
  infoContainer: {
    flexDirection: `column`, justifyContent: `center`,
  },
  name: {
    ...globalStyle, color: darkGray, fontSize: 14,
  },
  role: {
    ...globalStyle, color: lightGray, fontSize: 12,
  },
});
