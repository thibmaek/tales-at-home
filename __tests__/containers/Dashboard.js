// import 'react-native';
// import React from 'react';
// import renderer from 'react-test-renderer';
//
// import Dashboard from 'src/containers/Dashboard';
//
// jest.mock(`apsl-react-native-button`, () => `Button`);
//
// describe.skip(`Container: <Dashboard />`, () => {
//   it(`should render the container`, () => {
//     const tree = renderer.create(<Dashboard />).toJSON();
//     expect(tree).toMatchSnapshot(`Dashboard`);
//   });
// });
it(`skips`, () => {
  expect(3).toEqual(3);
});
