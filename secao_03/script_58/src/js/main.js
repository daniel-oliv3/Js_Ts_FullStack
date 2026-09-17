/*58 - While e Do While - Estrutura de repetição*/
//Ex01 While
let i = 0;

while (i <= 10) {
    console.log(i);
    i++;
}

console.log("Segue a Vida!...");


//Ex02 While
const nome = 'Daniel';
let n = 0;

while (n < nome.length) {
    console.log(nome[n]);
    n++;
}

//Ex03 While
function random(min, max) {
    const r = Math.random() * (max - min);
    return Math.floor(r);
}

const min = 1;
const max = 50;
//let rand = 10;

let rand = random(min, max);
console.log(rand);

while(rand !== 10){
    rand = random(min, max);
    console.log(rand);
}

console.log('###################');

//Ex04 Do While
do {
    rand = random(min, max);
    console.log(rand);
}while(rand !== 10)















