import React, { PropTypes } from 'react';
import { View, Text, ScrollView } from 'react-native';

import Button from 'apsl-react-native-button';

import globalStyle from 'src/assets/styles/GlobalStyle';
import s from 'src/assets/styles/components/Card';

const Card = ({ title, meta, content, action }) => {
  return (
    <View style={s.container}>
      <Text style={[globalStyle, s.title]}>{ title }</Text>
      <Text style={[globalStyle, s.meta]}>{ meta }</Text>
      <ScrollView>
        <Text style={[globalStyle, s.content]} selectable={true}>
          { content }
        </Text>
      </ScrollView>
      {action ?
        <Button style={s.button} textStyle={[globalStyle, { fontWeight: `bold` }]}>{action}</Button>
        : null
      }
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
