import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import UserPicker from 'src/containers/UserPicker';
import Dashboard from 'src/containers/Dashboard';

const App = () => (
  <Router hideNavBar={true}>
    <Scene key='rootScene' component={UserPicker} initial={true} />
    <Scene key='dashboardScene' component={Dashboard} title='Dashboard' />
  </Router>
);

export default App;
