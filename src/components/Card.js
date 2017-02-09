import React, { PropTypes } from 'react';
import { View, Text, ScrollView } from 'react-native';
import DynamicButton from 'rndynamicbutton';

import s from 'src/assets/styles/components/Card';

const Card = ({ title, meta, content, action }) => (
  <View style={s.container}>
    <View style={s.innerContainer}>
      <Text style={s.title}>{ title }</Text>
      <Text style={s.meta}>{ meta }</Text>
    </View>
    <ScrollView style={s.contentScrollView}>
      <Text style={s.content} selectable={true}>{ content }</Text>
    </ScrollView>
    { action ?
      <DynamicButton touchable='highlight' style={s.button} textStyle={s.buttonText}>
        { action }
      </DynamicButton>
      : null }
  </View>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  meta: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  action: PropTypes.string,
};

export default Card;
