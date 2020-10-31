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