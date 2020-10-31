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

