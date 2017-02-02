import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import AuthType from 'src/components/AuthType';

jest.mock(`apsl-react-native-button`, () => `Button`);
jest.mock(`react-native-linear-gradient`, () => `LinearGradient`);

describe(`Component: <AuthType>`, () => {

  it(`should render without children passed`, () => {
    const tree = renderer.create(<AuthType />).toJSON();
    expect(tree).toMatchSnapshot(`AuthType`);
  });

  it(`should render wrapping, without children passed`, () => {
    const tree = renderer.create(<AuthType></AuthType>).toJSON();
    expect(tree).toMatchSnapshot(`AuthType: Wrapping`);
  });

});

describe(`Component: <AuthType {...props}>`, () => {

  it(`should render with a title prop`, () => {
    const tree = renderer.create(<AuthType title='A snapshot title' />).toJSON();
    expect(tree).toMatchSnapshot(`AuthType: <Prop:title>`);
  });

  it(`should render with an action prop`, () => {
    const tree = renderer.create(<AuthType action='Bewerken' />).toJSON();
    expect(tree).toMatchSnapshot(`AuthType: <Prop:title>`);
  });

});
