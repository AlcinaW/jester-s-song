const functions = require('./functions');

test('Add 2 + 2 to equal 4', () => {
    // expect: add function with expected parameters, pass in data
    // then add matcher for jest (toBe)
    expect(functions.add(2, 2)).toBe(4);
});

test('Add 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// checking for null
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

// should be falsy, ex. null, 0, undefined
test('Should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});

// toEqual
// toBe can't be used on an object, different memory spaces even if the object looks the same visually
test('User should be Jester Lavorre object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Jester',
        lastName: 'Lavorre'
    });
});

// less than and greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});

// regular expressions
test('There is no a in diceroll', () => {
    expect('diceroll').not.toMatch(/I/);
});

// arrays 
test('Admin should be in usernames', () => {
    usernames = ['Caduceus', 'Clay', 'admin'];
    expect(usernames).toContain('admin');
});

// working with async data

// promise
//test('User fetched name should be Leanne Graham', () => {
//verify that the number of assertions were called 
// check that the .then was actually called  
// need return statement to make sure that the test doesn't complete before the fetch is complete
//     expect.assertions(1);
//     return functions.fetchUser()
//         .then(data => {
//             expect(data.name).toEqual('Leanne Graham');
//         })
// });

// async await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});

