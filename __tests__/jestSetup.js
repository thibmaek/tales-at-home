beforeAll(() => console.error = jest.fn());

afterAll(() => console.error = console.error);
