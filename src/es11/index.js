// Dynamic import, 

const button = document.getElementById('btn');

button.addEventListener("click", async function () {
    const module = await import("./file.js");
    module.hello();
});

// BigInt
const aBigNumber = 9007199254740992n;
const anotherBigNumber = BigInt(9007199254740992);

console.log(aBigNumber);
console.log(anotherBigNumber)


// Promise.allSettled

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 2"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));

// GlobalThis

console.log(window); // Corriendo sobre Node, no muestra nada porque no esta definido. En el navegador si.
console.log(globalThis); // Nos da acceso a una variable global, util para aplicaciones 

// NULLISH COALESCING

const fooo = null ?? 'default string'; // null o undefined
console.log(fooo);

// Optional Chaining

const user = {};
console.log(user?.profile?.email);

if (user?.profile?.email) {
    console.log('email')
} else {
    console.log('Fail');
}