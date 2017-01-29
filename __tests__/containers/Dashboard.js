import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Dashboard from '../../src/containers/Dashboard';

jest.mock(`apsl-react-native-button`, () => `Button`);

describe(`Container: <Dashboard />`, () => {
  it(`should render the container`, () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot(`Dashboard`);
  });
});
