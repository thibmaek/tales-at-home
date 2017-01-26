import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import TalesAtHome from '../index.ios.js';

describe(`Container: <TalesAtHome />`, () => {
  it(`should render the container`, () => {
    const tree = renderer.create(<TalesAtHome />).toJSON();
    expect(tree).toMatchSnapshot(`TalesAtHome`);
  });
});
