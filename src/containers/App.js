import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import UserPicker from 'src/containers/UserPicker';
import Dashboard from 'src/containers/Dashboard';

const App = () => (
  <Router hideNavBar={true}>
    <Scene key='rootScene' component={UserPicker} />
    <Scene key='dashboardScenes'>
      <Scene key='dashboard' component={Dashboard} title='Dashboard' initial={true} />
    </Scene>
  </Router>
);

export default App;
