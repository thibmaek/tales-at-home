import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import LanguageSelection from '../../src/containers/LanguageSelection';

jest.mock(`react-native-linear-gradient`, () => `LinearGradient`);

describe(`Container: <LanguageSelection />`, () => {
  it(`should render the container`, () => {
    const tree = renderer.create(<LanguageSelection />).toJSON();
    expect(tree).toMatchSnapshot(`LanguageSelection`);
  });

  it(`should not accept {...initialLang<Any>} as a prop`, () => {
    const tree = renderer.create(<LanguageSelection initialLang={4} />).toJSON();
    expect(tree).toThrowError();
  });
});
