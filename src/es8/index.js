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

