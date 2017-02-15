import React, { PropTypes } from 'react';
import { TouchableWithoutFeedback, View, Image } from 'react-native';

import s from 'src/assets/styles/components/RateCard';

const _getCard = (type, handler) => {
  switch (type) {
  case `positive`:
    return (
      <TouchableWithoutFeedback onPress={handler}>
        <View style={s.cardPositive}>
          <Image style={s.image}
            source={require(`src/assets/img/icons/rate_whatisthiseven.png`)} />
        </View>
      </TouchableWithoutFeedback>
    );
  case `negative`:
    return (
      <TouchableWithoutFeedback onPress={handler}>
        <View style={s.cardNegative}>
          <Image style={s.image}
            source={require(`src/assets/img/icons/rate_negative@2x.png`)} />
        </View>
      </TouchableWithoutFeedback>
    );
  case `neutral`:
    return (
      <TouchableWithoutFeedback onPress={handler}>
        <View style={s.cardNeutral}>
          <Image style={s.image}
            source={require(`src/assets/img/icons/rate_neutral.png`)} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
};

const RateCard = ({ type, onPress }) => (_getCard(type, onPress));

RateCard.propTypes = {
  type: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default RateCard;
