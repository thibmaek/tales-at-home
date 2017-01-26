import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../../src/containers/App';

jest.mock(`react-native-linear-gradient`, () => `LinearGradient`);

describe(`Container: <App />`, () => {
  it(`should render the container`, () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot(`App`);
  });

  it(`should not accept {...initialLang<Any>} as a prop`, () => {
    const tree = renderer.create(<App initialLang={4} />).toJSON();
    expect(tree).toThrowError();
  });
});
