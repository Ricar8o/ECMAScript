const obj = {
    name: 'Ricardo',
    age: 20,
    country: 'CO',
};

let { name, ...all} = obj;
console.log(name,all);

const obj0 = {
    name: 'Ricardo',
    age: 20,
}

const obj1 = {
    ...obj0, // anidado
    country: 'CO',
}

console.log(obj1)

const helloWorld = () => {
    return new Promise((resolve,reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'),3000)
        : reject(new Error('Test Error'))
    });
};

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('Finalizo'))

// REGEX

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year,month,day);

// otro REGEX 
const regexData = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/
constmatch = regexData.exec('2018-04-20');
const { year, month, day } = constmatch.groups;

console.log(year, month, day);