import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import { Dashboard, Setup, UserPicker } from 'src/containers/';
import { Swiping } from 'src/containers/sessions/';
import { NavigationBar } from 'src/components/';

/* eslint-disable max-len*/
const App = () => (
  <Router hideNavBar={true}>
    <Scene key='rootScene' component={UserPicker} />
    <Scene key='setupScene' component={Setup} hideNavBar={false} title='Aanmelden' navBar={NavigationBar} />
    <Scene key='dashboardScene' component={Dashboard} title='Dashboard' />
    <Scene key='sessionScenes' initial={true}>
      <Scene key='sessionSwiping' initial={true}>
        <Scene key='swipeInitial' component={Swiping} step='select' />
        <Scene key='swipeUp' component={Swiping} step='swipe' />
      </Scene>
    </Scene>
  </Router>
);
/* eslint-enable max-len */

export default App;
