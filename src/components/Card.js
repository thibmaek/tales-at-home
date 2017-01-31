import React, { PropTypes } from 'react';
import { View, Text, ScrollView } from 'react-native';

import Button from 'apsl-react-native-button';

import s from 'src/assets/styles/components/Card';

const Card = ({ title, meta, content, action }) => {
  return (
    <View style={s.container}>
      <Text style={s.title}>{ title }</Text>
      <Text style={s.meta}>{ meta }</Text>
      <ScrollView>
        <Text style={s.content} selectable={true}>{ content }</Text>
      </ScrollView>
      { action ? <Button textStyle={s.buttonText}>{ action }</Button> : null }
    </View>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  meta: PropTypes.string,
  content: PropTypes.string,
  action: PropTypes.string,
};

export default Card;
