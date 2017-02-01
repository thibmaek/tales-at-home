import hash from 'src/lib/generateIdFromTime';

describe(`Method: hash`, () => {

  it(`should return a string`, () => {
    expect(typeof hash(Date.now())).toBe(`number`);
  });

  it(`should return a string`, () => {
    expect(hash(new Date())).toThrow(TypeError);
  });

});
