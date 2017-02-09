import React, { PropTypes } from 'react';
import { View } from 'react-native';
import DynamicButton from 'rndynamicbutton';

import capString from 'src/lib/capitalizeString';

import s from 'src/assets/styles/components/Sidebar';

const Sidebar = ({ children, action }) => (
  <View style={s.sidebar}>
    {children}
    {action
      ? <DynamicButton
          touchable='highlight'
          style={s.buttonBg}
          textStyle={s.buttonText}
          action={action.handler}>
          { capString(action.text) }
        </DynamicButton>
      : null
    }
  </View>
);

Sidebar.propTypes = {
  children: PropTypes.element,
  action: PropTypes.object,
};

export default Sidebar;
