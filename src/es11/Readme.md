# ECMASCRIPT 11

## Dynamic import (importación dinámica)

- Permite llamar nuestro código cuando lo necesitemos.

- El archivo no se va a cargar de manera automatica.

- Con esto podremos dividir nuestro codigo y evitar que la app sea muy grande.

- Por todo lo anterior, mejora la performance.


## BigInt
BigInt es un tipo numérico especial que provee soporte a enteros de tamaño arbitrario.
Con BigInt se pueden usar números mayores a 2^53 que era el número maximo que se podia usar en Javascript.


Un bigint se crea agregando n al final del literal entero o llamando a la función BigInt que crea bigints desde cadenas, números, etc.

[More about BigInt](https://es.javascript.info/bigint)

## Promise.allSettled
El método Promise.allSettled() devuelve una promesa que se resuelve después de que todas las promesas dadas se hayan cumplido o rechazado, con un array de objetos que describen el resultado de cada promesa.

Se suele utilizar cuando se tienen múltiples tareas asíncronas que no dependen unas de otras para completarse con éxito, o se quiere saber siempre el resultado de cada promesa.

En comparación, la promesa devuelta por Promise.all() puede ser más apropiada si las tareas dependen unas de otras / si se desea rechazar inmediatamente al rechazar alguna de ellas.

Promise all vs allsettled, all sera rechazada en el momento en que alguna es rechazada, allSettled esperará hasta que todas sean resueltas y devolvera la información.

[More about Promise.allSettled](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)

## GlobalThis
Hace referencia al objeto global, sin importar el contextoen el que se encuentra el código.

En el browser tenemos “window”, en Node es “global” y “self” para WebWorkers.

[More about GlobalThis](https://blog.logrocket.com/what-is-globalthis-why-use-it/)

## Nullish Coalescing
Es un operador logico que nos regresa el lado derecho si el elemento al lado izquierdo es nulo o indefinido.

[More about Nullish Coalescing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)

## Optional Chaining
Esta sintaxis te permite acceder a propiedades anidadas de objetos sin preocuparte de si la propiedad existe o no.
Si no existe la ‘prop’, devuelve “undefined”.

Si uno trata de acceder a una propiedad que no existe suele arrojar un error y detiene la aplicación, con Optional Chaining lo que sucede es que la propiedad que estamos buscando si no existe, devuelve undefined.