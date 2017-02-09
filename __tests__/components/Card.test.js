import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Card from 'src/components/Card';

jest.mock(`rndynamicbutton`, () => `DynamicButton`);

describe(`Component: <Card>`, () => {

  it(`should render without children passed`, () => {
    const tree = renderer.create(<Card />).toJSON();
    expect(tree).toMatchSnapshot(`Card`);
  });

  it(`should render wrapping, without children passed`, () => {
    const tree = renderer.create(<Card></Card>).toJSON();
    expect(tree).toMatchSnapshot(`Card: Wrapping`);
  });

});

describe(`Component: <Card {...props}>`, () => {

  it(`should render with a title prop`, () => {
    const tree = renderer.create(<Card title='Snapshot title' />).toJSON();
    expect(tree).toMatchSnapshot(`Card <Prop:title>`);
  });

  it(`should render with a meta prop`, () => {
    const tree = renderer.create(<Card meta='Snapshot meta' />).toJSON();
    expect(tree).toMatchSnapshot(`Card <Prop:meta>`);
  });

  it(`should render with a content prop`, () => {
    const tree = renderer.create(<Card content='Snapshot content' />).toJSON();
    expect(tree).toMatchSnapshot(`Card <Prop:content>`);
  });

  it(`should render with an action prop`, () => {
    const tree = renderer.create(<Card action='Snapshot action' />).toJSON();
    expect(tree).toMatchSnapshot(`Card <Prop:action>`);
  });

});
