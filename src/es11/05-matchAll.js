const regex = /\b(apple)+\b/g;

const fruit = 'banana, apple, pineapple, orange, kiwi, cherry, strawberry'

for(const match of fruit.matchAll(regex)){
    console.log(match);
};