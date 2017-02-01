import React, { PropTypes } from 'react';
import { View } from 'react-native';

import Button from 'apsl-react-native-button';

import capString from 'src/lib/capitalizeString';

import s from 'src/assets/styles/components/Sidebar';

const Sidebar = ({ children, action }) => {
  return (
    <View style={s.sidebar}>
      {children}
      {action
        ? <Button style={s.buttonBg} textStyle={s.buttonText}>{capString(action.text)}</Button>
        : null
      }
    </View>
  );
};

Sidebar.propTypes = {
  children: PropTypes.element,
  action: PropTypes.object,
};

export default Sidebar;
