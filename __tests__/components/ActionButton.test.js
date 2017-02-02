import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import ActionButton from 'src/components/ActionButton';

jest.mock(`apsl-react-native-button`, () => `Button`);

describe(`Component: <ActionButton>`, () => {

  it(`should render without children passed`, () => {
    const tree = renderer.create(<ActionButton />).toJSON();
    expect(tree).toMatchSnapshot(`ActionButton`);
  });

  it(`should render wrapping, without children passed`, () => {
    const tree = renderer.create(<ActionButton></ActionButton>).toJSON();
    expect(tree).toMatchSnapshot(`ActionButton: Wrapping`);
  });

});
