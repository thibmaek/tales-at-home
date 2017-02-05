import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import { Dashboard, Setup, UserPicker } from 'src/containers/';
import { NavigationBar } from 'src/components/';

/* eslint-disable max-len*/
const App = () => (
  <Router hideNavBar={true}>
    <Scene key='rootScene' component={UserPicker} initial={true} />
    <Scene key='setupScene' component={Setup} hideNavBar={true} title='Aanmelden' navBar={NavigationBar} />
    <Scene key='dashboardScene' component={Dashboard} title='Dashboard' />
  </Router>
);
/* eslint-enable max-len */

export default App;
