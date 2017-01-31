import React, { PropTypes } from 'react';
import { View, Text, Image } from 'react-native';

import s from 'src/assets/styles/containers/Loading';
import loadingCharBlue from 'src/assets/img/chars/loading_blue.png';

const Loading = ({ character, title }) => {
  return (
    <View style={s.loadingView}>
        <Image
          style={s.loadingChar}
          source={character === `blue` ? loadingCharBlue : null}
        />
        <Text style={s.loadingText}>{ title ? title : `` }</Text>
    </View>
  );
};

Loading.defaultProps = {
  character: `blue`,
};

Loading.propTypes = {
  character: PropTypes.string,
  title: PropTypes.string,
};

export default Loading;
