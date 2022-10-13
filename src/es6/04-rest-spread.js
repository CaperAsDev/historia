//*Arrays destructuring
let fruits = ['apple', 'banana'];
let [a,b] = fruits;
console.log("🚀 ~ file: 04-rest-spread.js ~ line 4 ~ a,b", a,b)

//*Object destructuring

let user = {userName: 'CaperActus', age: 27};
let {userName, age} = user;
console.log(userName, age);

//!Spread operator

let person = {name:'caper', age: 27};
let country = 'CO';

let data = {id:1, ... person, country};
console.log("🚀 ~ file: 04-rest-spread.js ~ line 18 ~ data", data)

//!Rest

function sum(num, ... values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
};

sum(1, 2, 3, 4);