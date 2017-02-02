import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import { Dashboard, UserPicker } from 'src/containers/';

const App = () => (
  <Router hideNavBar={true}>
    <Scene key='rootScene' component={UserPicker} initial={true} />
    <Scene key='dashboardScene' component={Dashboard} title='Dashboard' />
  </Router>
);

export default App;
