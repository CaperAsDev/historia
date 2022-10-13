const user = {username: 'Caper', age: '27', hobbie: 'painting', country: 'CO'};
const {username, ...other} = user;
console.log(username);
console.log(other);
console.log(user);
console.log(typeof username);
console.log(typeof other);
