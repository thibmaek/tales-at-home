import { StyleSheet } from 'react-native';
import { cardRed, cardGreen, cardBlue } from 'src/assets/styles/vars';

const card = {
  justifyContent: `center`,
  alignItems: `center`,
  width: 137 * 2,
  height: 150 * 2,
  borderRadius: 7.5 * 2,
};

export default StyleSheet.create({
  cardPositive: {
    ...card,
    backgroundColor: cardGreen,
    transform: [{ rotate: `10deg` }, { translateX: - 50 }],
  },
  cardNegative: {
    ...card,
    backgroundColor: cardRed,
    transform: [{ rotate: `-10deg` }, { translateX: 50 }],
  },
  cardNeutral: {
    ...card,
    zIndex: 3,
    backgroundColor: cardBlue,
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
});
