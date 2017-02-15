import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import { Connect, Dashboard, Setup, UserPicker } from 'src/containers/';
import { Swiping } from 'src/containers/sessions/';
import { NavigationBar } from 'src/components/';

/* eslint-disable max-len*/
const App = () => (
  <Router hideNavBar={true}>
    <Scene key='rootScene' component={UserPicker} />
    <Scene key='rootScene' component={UserPicker} initial={true} />
    <Scene key='connectionScene' action='BACK' component={Connect} actionTitle='terug naar het keuzemenu' hideNavBar={false} navBar={NavigationBar} />
    <Scene key='setupScene' action='BACKTOROOT' component={Setup} hideNavBar={false} actionTitle='terug naar het keuzemenu' title='Registreren' navBar={NavigationBar} navigate='BACK' />
    <Scene key='dashboardScene' component={Dashboard} title='Dashboard' type='reset' />
    <Scene key='dashboardScene_new' component={Dashboard} title='Nieuw gezin aanmaken' type='replace' addFamily={true} dimmed={false} />
    <Scene key='sessionSwiping'>
      <Scene key='swipeInitial' component={Swiping} step='select' />
      <Scene key='swipeUp' component={Swiping} step='swipe' />
      <Scene key='swipeAwaiting' component={Swiping} step='awaiting' />
      <Scene key='swipeReceived' component={Swiping} step='received' />
    </Scene>
  </Router>
);
/* eslint-enable max-len */

export default App;
