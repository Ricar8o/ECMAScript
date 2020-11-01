// # Entries
const data = {
    frontend : 'Ricardo',
    backend : 'Julian',
    design : 'Alan', //Trailing comas, nos permite asignar elementos al objeto mediante comas.
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length)

// # Values
const data = {
    frontend : 'Ricardo',
    backend : 'Julian',
    design : 'Alan',
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

// PadStart y PadEnd
const string = 'hello';
console.log(string.padStart(7,'hi'))
console.log(string.padEnd(12,' ------'))
console.log('food'.padEnd(12,' ------'))

// CLASE 7

const helloWorld = () => {
    return new Promise((resolve,reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error){
        console.log(error);
    }
};

anotherFunction();