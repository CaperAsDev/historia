var lastName = 'Caper';
lastName = 'Actus'
console.log(lastName);

let fruit = 'apple';
fruit = 'kiwi';
console.log(fruit);

const animal = 'cat';
animal = 'dog';
console.log(animal);

function fruits(){
    if(true){
        var fruit1= 'apple';//*Function Scope
        let fruit2= 'banana';//*Block Scope
        const fruit3= 'kiwi';//*Block Scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();