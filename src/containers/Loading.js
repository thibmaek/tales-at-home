import React, { PropTypes } from 'react';
import { View, Text, Image } from 'react-native';

import { Preloader } from 'src/components/';

import s from 'src/assets/styles/containers/Loading';
import loadingChar from 'src/assets/img/chars/loadingChar.png';

const Loading = ({ title }) => (
  <View style={s.loadingView}>
    <Image style={s.loadingChar} source={loadingChar} />
    <View style={s.isLoading}>
      <Preloader size={32} />
      <Text style={s.loadingText}>{ title ? title : `` }</Text>
    </View>
  </View>
);

Loading.propTypes = {
  title: PropTypes.string,
};

export default Loading;
