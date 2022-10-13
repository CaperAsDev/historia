function newUser(name, age, country){
    var name = name || 'Oscar';
    // console.log("🚀 ~ file: 04-default-params.js ~ line 3 ~ newUser ~ name", name)
    var age = age || '27';
    // console.log("🚀 ~ file: 04-default-params.js ~ line 4 ~ newUser ~ age", age)
    var country = country || 'Colombia';
    // console.log("🚀 ~ file: 04-default-params.js ~ line 5 ~ newUser ~ country", country)
};
newUser();
newUser('Caper', 20, 'Narnia');

// !AHora

function newAdmin(name = 'Caper', age = 22, conuntry = 'JP'){
    console.log("🚀 ~ file: 04-default-params.js ~ line 15 ~ newAdmin ~ conuntry", conuntry)
    console.log("🚀 ~ file: 04-default-params.js ~ line 15 ~ newAdmin ~ age", age)
    console.log("🚀 ~ file: 04-default-params.js ~ line 15 ~ newAdmin ~ name", name)
};

newAdmin();
newAdmin('Actus', 30, 'CO');