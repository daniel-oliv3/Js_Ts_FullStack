/*Atribuição via desestruturação (Arrays)*/
//Ex04
//indice             0         1         2
//                0  1  2   0  1  2   0  1  2
const numeros = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];

//console.log(numeros[1][2]); //6
//const [, [,,seis]] = numeros;
const [lista1, lista2, lista3] = numeros;
console.log(lista1, lista2, lista3);


/*Ex03
//indice         0,   1,   2,   3,   4,   5,   6,   7,   8
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const [um, , tres, , cinco, , sete] = numeros;
console.log(um, tres, cinco, sete);
*/





/*Ex02
//indice         0,   1,   2,   3,   4,   5,   6,   7,   8
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];

//const [primeiroNumero, segundoNumero] = numeros;
const [primeiroNumero, segundoNumero, ...resto] = numeros;
//console.log(numeros[0]);
console.log(primeiroNumero, segundoNumero); //1 2
console.log(resto);
*/

// ... rest, ...spread


/*Ex01
let a = 'A';  //b
let b = 'B';  //c
let c = 'C';  //a

//const numeros = [1, 2, 3];
//[a, b, c] = numeros; 
const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);
*/





