import upperCase from 'src/lib/upperCaseString';

const str = `a lowercase string`;

describe(`Method: upperCase`, () => {

  it(`should capitalize all letters of a string`, () => {
    expect(upperCase(str)).toEqual(`A LOWERCASE STRING`);
  });

  it(`should work when it's already capitalised`, () => {
    expect(upperCase(`AN UPPERCASE STRING`)).toEqual(`AN UPPERCASE STRING`);
  });

});
