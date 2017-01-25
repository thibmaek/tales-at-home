import React from 'react';
import { AppRegistry } from 'react-native';

import App from './src/containers/App';

const TalesAtHome = () => (<App />);

AppRegistry.registerComponent(`talesathome`, () => TalesAtHome);
export default TalesAtHome;
