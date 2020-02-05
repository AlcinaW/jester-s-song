const functions = require('./functions');

test('Add 2 + 2 to equal 4', () => {
    //expect: add function with expected parameters, pass in data
    //then add matcher for jest: 
    expect(functions.add(2, 2)).toBe(4);
});