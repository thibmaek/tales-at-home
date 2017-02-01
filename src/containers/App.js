import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Dashboard from 'src/containers/Dashboard';

const App = () => (
  <Router>
    <Scene key='rootScene' hideNavBar={true}>
      <Scene key='dashboard' component={Dashboard} title='Dashboard' initial={true} />
    </Scene>
  </Router>
);

export default App;
