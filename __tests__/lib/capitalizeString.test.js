import capString from 'src/lib/capitalizeString';

const str = `a lowercase sentence`;

describe(`Method: capString`, () => {

  it(`should capitalize the first letter of a string`, () => {
    expect(capString(str)).toEqual(`A lowercase sentence`);
  });

  it(`should work when it's already capitalised`, () => {
    expect(capString(`A lowercase sentence`)).toEqual(`A lowercase sentence`);
  });

});
