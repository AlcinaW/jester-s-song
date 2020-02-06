const axios = require('axios');

const functions = {
    add: (number1, number2) => number1 + number2,
    isNull: () => null,
    checkValue: x => x,
    createUser: () => {
        //create user with first and last name 
        const user = { firstName: 'Jester' }
        user['lastName'] = 'Lavorre';
        return user;
    },
    fetchUser: () =>
        axios
            .get('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.data)
            .catch(error => 'error')
};

module.exports = functions;