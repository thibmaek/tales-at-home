import React, { PropTypes } from 'react';
import { View, Text, TextInput } from 'react-native';

import User from 'src/components/User';

import globalStyle from 'src/assets/styles/GlobalStyle.js';
import s from 'src/assets/styles/components/NavigationBar';
import mockedUser from 'src/assets/img/mockedUser.jpg';

const NavigationBar = ({ title }) => {
  return (
    <View style={s.navbar}>
      <View style={s.rightNav}>
        { title ? <Text style={[globalStyle, s.title]}>{title.toUpperCase()}</Text> : null }
        <TextInput
          style={[globalStyle, s.input]}
          placeholder='zoeken…'
          onChangeText={text => console.log(text)}
        />
      </View>
      <User style={s.user} name='Celestine Verghaege' imageURI={mockedUser} />
    </View>
  );
};

NavigationBar.propTypes = {
  title: PropTypes.string,
};

export default NavigationBar;
