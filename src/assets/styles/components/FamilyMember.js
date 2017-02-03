import { StyleSheet } from 'react-native';
import { globalStyle, white, accentYellow, accentBlue, accentRed } from 'src/assets/styles/vars';

import pick from 'src/lib/pickArr';

const rnd = pick([accentBlue, accentRed, accentYellow]);

export default StyleSheet.create({
  container: {
    justifyContent: `center`, alignItems: `center`,
    width: 35, height: 35,
    backgroundColor: rnd,
    borderRadius: 5,
  },
  text: {
    ...globalStyle,
    color: white,
  },
});
