//Objeto Math

//arredondando para baixo
let num1 = 9.54578;
let num2 = Math.floor(num1);
console.log(num2); //9

//arredondando para cima
let numOne = 9.54578;
let numTwo = Math.ceil(numOne);
console.log(numTwo); //10

//arredondando para cima
let numOne1 = 9.51578; //arredonda pra cima 10
let numO = 9.49578; //arredonda pra baixo 9
let numTwo2 = Math.round(numOne1);
let numT = Math.round(numO);
console.log(numTwo2); //10
console.log(numT); //9

//busca o maior numero
console.log(Math.max(1,2,3,4,5,-10,50,1500,9,8,7,6)); //1500

//busca o menor numero
console.log(Math.min(1,2,3,4,5,-10,50,1500,9,8,7,6)); //-10

//numero aleatorio
const aleatorio = Math.round(Math.random() * (10 - 5) + 5); //entre 10 e 5
console.log(aleatorio);

//valor de pi
console.log(Math.PI); //3.141592653589793

//potenciação
console.log(Math.pow(2, 10)); // 2 elevado a 10 = (1024)
console.log(2 ** 10); // mesmo resultado do codigo acima 1024

//raiz quadrada
let nume = 9;

console.log(nume ** (1/2)); //3
console.log(nume ** 0.5); //3

//dividir numero por 0 (somente em JavaScript) outras linguagem daria erro!
console.log(100 / 0); //infinity
console.log(100 / 0.0000000000001); //1000000000000000


console.log(100 / 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001); //infinity











