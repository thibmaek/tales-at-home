import { StyleSheet } from 'react-native';
import { globalStyle } from 'src/assets/styles/vars';

export default StyleSheet.create({
  container: {
    flexDirection: `column`,
  },
  image: {
    width: 84, height: 84,
    borderRadius: 42,
  },
  text: {
    marginTop: 9,
    ...globalStyle, fontWeight: `bold`, textAlign: `center`,
  },
});
