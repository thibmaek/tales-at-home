import { StyleSheet } from 'react-native';
import { white, buttonShadowColor } from 'src/assets/styles/vars';

export default StyleSheet.create({
  button: {
    height: 35,
    paddingLeft: 20, paddingRight: 20,
    backgroundColor: white,
    borderWidth: 0, borderRadius: 50,
    shadowColor: buttonShadowColor, shadowOpacity: .3,
    shadowOffset: { width: 0, height: 3 }, shadowRadius: 3,
  },
});
