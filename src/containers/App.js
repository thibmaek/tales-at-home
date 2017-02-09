import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import { Connect, Dashboard, Setup, UserPicker } from 'src/containers/';
import { Swiping } from 'src/containers/sessions/';
import { NavigationBar } from 'src/components/';

/* eslint-disable max-len*/
const App = () => (
  <Router hideNavBar={true}>
    <Scene key='rootScene' component={UserPicker} initial={true} />
    <Scene key='connectionScene' component={Connect} title='Connecteren' navBar={NavigationBar} navigate='BACK' />
    <Scene key='setupScene' component={Setup} hideNavBar={false} title='Registreren' navBar={NavigationBar} navigate='BACK' />
    <Scene key='dashboardScene' component={Dashboard} title='Dashboard' type='reset' />
    <Scene key='dashboardScene_new' component={Dashboard} title='Nieuw gezin aanmaken' type='replace' addFamily={true} dimmed={true} />
    <Scene key='sessionSwiping'>
      <Scene key='swipeInitial' component={Swiping} step='select' />
      <Scene key='swipeUp' component={Swiping} step='swipe' />
    </Scene>
  </Router>
);
/* eslint-enable max-len */

export default App;
