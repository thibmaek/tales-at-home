import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import { NavigationBar } from 'src/components/';

import { Dashboard, Setup, UserPicker } from 'src/containers/';

/* eslint-disable max-len*/
const App = () => (
  <Router hideNavBar={true}>
    <Scene key='rootScene' component={UserPicker} initial={true} />
    <Scene key='setupScene' component={Setup} hideNavBar={false} title='Aanmelden' navBar={NavigationBar} navigate='BACK' />
    <Scene key='dashboardScene' component={Dashboard} title='Dashboard' type='reset' />
    <Scene key='dashboardScene_new' component={Dashboard} title='Nieuw gezin aanmaken' type='replace' addFamily={true} dimmed={true} />
  </Router>
);
/* eslint-enable max-len */

export default App;
