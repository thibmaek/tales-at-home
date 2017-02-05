import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Sidebar from 'src/components/Sidebar';
import Card from 'src/components/Card';

jest.mock(`apsl-react-native-button`, () => `Button`);

describe(`Component: <Sidebar>`, () => {

  it(`should render without children passed`, () => {
    const tree = renderer.create(<Sidebar />).toJSON();
    expect(tree).toMatchSnapshot(`Sidebar`);
  });

  it(`should render wrapping, without children passed`, () => {
    const tree = renderer.create(<Sidebar></Sidebar>).toJSON();
    expect(tree).toMatchSnapshot(`Sidebar: Wrapping`);
  });

  it(`should render wrapping, with children passed`, () => {
    const tree = renderer.create(
      <Sidebar>
        <Card />
      </Sidebar>
    ).toJSON();
    expect(tree).toMatchSnapshot(`Sidebar: Wrapping children`);
  });

});

describe(`Component: <Sidebar {...props}>`, () => {

  it(`should render with an action prop`, () => {
    const tree = renderer.create(<Sidebar action={{
      type: `Neutral`,
      text: `A snapshot action`,
    }} />).toJSON();
    expect(tree).toMatchSnapshot(`Sidebar <Prop:title>`);
  });

});
