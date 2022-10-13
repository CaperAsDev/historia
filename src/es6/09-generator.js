function* iterate(array){
    for(let value of array){
        yield value;
    };
};
const it = iterate(['Caper', 'actus', 'kevin', 'daniel', 'dinki']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);