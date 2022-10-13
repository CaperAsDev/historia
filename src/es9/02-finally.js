const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            setTimeout(() => resolve('Hey!!'), 2000)
        } else {
            setTimeout(() => reject("Whooops!"), 5000)
        };
    });
};

anotherFunction()
    .then(response => console.log('then...' + response))
    .catch(err => console.log('catch...' + err))
    .finally(() => console.log('Finally!'))

//Generador asincrono

async function* anotherGenerator (){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
};

const other = anotherGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('Hello');

async function arrayOfNames(array){
    for await (let value of array){
        console.log(value);
    };
};
const names = arrayOfNames(['jose', 'caper', 'dami', 'pau']);
console.log(names);
console.log('after');