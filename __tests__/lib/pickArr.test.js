import pick from 'src/lib/pickArr';

describe(`Method: pick`, () => {
  it(`should pick the only value is the array.length = 1`, () => {
    expect(pick([1])).toEqual(1);
  });
});
