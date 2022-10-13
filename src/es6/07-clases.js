//*declaramos la clase
class User{};
// const newUser = new User();

class Artist {
    //Metodos
    greeting(){
        return 'hello';
    }
};

const caper = new Artist();
console.log(caper.greeting());

//!Constructor
class Coder{
    constructor(){
        console.log('nuevo Usuario');
    }
    greeting(){
        return 'hello';
    }
};

const capicode = new Coder();

//! this

class Gamer{
    constructor(name, favGame){
        this.name = name;
        this.favGame = favGame;
    }
    greeting(){
        return 'Hey, Gamer!';
    }
    introduce(){
        return `${this.greeting()} 
        My name is ${this.name} and my favorite game is ${this.favGame}!`;
    }
};

const capigame = new Gamer('Caper', 'Alice Madness');
console.log(capigame.introduce());

// Setter and Getter

class Otaku{
    constructor(name, experience, favAnime, age){
        this.name = name;
        this.age = age;
        this.experience = experience;
        this.favAnime = favAnime;
    };
    greeting(){
        return 'Hey, Otaku!';
    };
    introduce(){
        return `${this.greeting()} 
        My name is ${this.name}, i've been watching anime for ${this.experience} years and my favorite anime is ${this.favGame}!`;
    };
    get uAge(){
        return this.age
    };
    set uAge(n){
        this.age = n;
    };
};

const capitaku = new Otaku('CapiTaku', 12, 'Konosuba', 27);
console.log(capitaku.uAge);
console.log(capitaku.uAge = 30);