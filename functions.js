const functions = {
    add: (number1, number2) => number1 + number2,
    isNull: () => null,
    checkValue: x => x,
    createUser: () => {
        //create user with first and last name 
        const user = { firstName: 'Jester' }
        user['lastName'] = 'Lavorre';
        return user;
    }
}

module.exports = functions;