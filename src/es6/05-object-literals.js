//*Enhance object literals
function newUser(user, age, country, uId){
    return{
        user,
        age:age,
        country:country,
        id: uId
    };
};
console.log(newUser('caper',27, 'CO',1));