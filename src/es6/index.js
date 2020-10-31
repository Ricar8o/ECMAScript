// Javascript
function newFunction(name,age,country) {
    var name = name || 'Ricardo';
    var age = age  || 20;
    var country = country || "CO";
    console.log(name,age,country);
}

// es6
function newFunction2(name = "Ricardo",age = 20, country = "CO"){
    console.log(name,age,country);
};

newFunction2();
newFunction2('Oscar', '32','MX')

let hello = "Hello";
let world = "World";

// Javascript
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// CLASE 2
// Javascript
let frase = "Un gran poder conlleva una gran responsabilidad \n"
+ "Son las decisiones las que nos hacen ser, quienes somos, y siempre podemos optar por hacer lo correcto.\n";

// es6
let frase2 = `Si recae sobre los mortales decidir si los dioses existen o no, entonces digo que los dioses viven todavía, en el alma y la mente de los mortales. Solo hace falta hallarlos y despertarlos
Sartre se equivocó, el dolor físico es peor que la angustia emocional prolongada
`;

console.log(frase);
console.log(frase2);


let person = {
    "name" : "Ricardo",
    "age" : 20,
    "country" : "CO"
}
console.log(person.name,person.age);

let {name, age} = person;
console.log(name, age);


let team1 = ["Ricardo", "Julian", "Natalia"];
let team2 = ["Jonatan", "Laura", "Milena"];

let education = ["Oscar", ...team1, ...team2];
console.log(education);


{
    var globalVar = "Global Var";
}
{
    let globalLet = "Global Let";
    console.log(globalLet);
}

console.log(globalVar);


const a = "b";
// a = "a"; Lanza un error, una constante jamas cambiara su valor despues de ser definida.
console.log(a);

// CLASE 3
let name = 'Ricardo';
let age = '20';
// es5
obj = {name : name , age : age};
// es6
obj2 = { name, age };
console.log(obj2);


let names = [
    {name : 'Andres', age : 20},
    {name : 'Oscar' , age : 32}
]

let listOfNames = names.map(function(item){
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name,age,country) => {
    console.log(name, age, country);
}
listOfNames3('Peter', 25, "US");

const square = num => num * num;
console.log( square(5) );

// CLASE 4
const helloPromise = () =>{
    return new Promise((resolve, reject) => {
        if (true){
            resolve('Hey!');
        }else{
            reject('Ups!');
        }
    });
}

helloPromise()
  .then(response => console.log(response))
  .then(() => console.log('Hello'))
  .catch(error => console.log(error));

class Calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new Calculator();
console.log(calc.sum(2,4));

// # MODULOS
// Sintaxis Nueva
// import { hello } from './module';

// Sintaxis Antigua
const hello = require('./module');
console.log(hello());


//  # Generator
function* helloWorld() {
    if (true){
        yield 'Hello, ';
    }
    if (true){
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);