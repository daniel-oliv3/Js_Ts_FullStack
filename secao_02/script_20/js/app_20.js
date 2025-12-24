// Operadores aritméticos, de atribuição e incremento

/*Operadores Aritméticos 
+ Adição, concatenação (- / *)

- Subtração

* Multiplicação

/ Divisão 
 
** Potenciação

% Resto da divisão

*/

//Concatenação
const numCon1 = '5'; 
const numCon2 = 10;

console.log(numCon1 + numCon2); // resultado da concatenação 510



//Potenciação
const numPo1 = 5; 
const numPo2 = 10;

console.log(numPo1 + numPo2); //15



//Resto da divisão
const numRes1 = 10; 
const numRes2 = 3;

console.log(numRes1 % numRes2); //1

//OBS: se o resto da divisão for um numero interio seu resultado e 0


/* Precedencia de operadores 

()
** 
* / % 
+ - 

*/
const num1 = 5; 
const num2 = 2;
const num3 = 10;

console.log(num1 + num2 * num3); //25
console.log((num1 + num2) * num3); //70



//incremento, pos (executa primeiro a ação a ser executada, depois faz o incremento do valor)
let contador1 = 1;
contador1 ++;
console.log(contador1); //2
console.log(contador1++); //2, executa mais o resultado so na proxima linha
console.log(contador1); //3

//incremento, pre (primeiro faz a conta depois retorna o valor)
let contador2 = 1;
++contador2;
console.log(contador2); //2
console.log(++contador2); //3


//decremento
let contador3 = 10;
--contador3;
console.log(contador3); //9
//console.log(--contador3); //8


//Operadores de atribuição    
const passo = 2;
let contador = 0;

contador = contador + passo;
console.log(contador); //2

contador = contador + passo;
console.log(contador); //4

contador = contador + passo;
console.log(contador); //6

contador = contador + passo;
console.log(contador); //8


// mais simples
let contadorP = 0;

contadorP += 2;
console.log(contadorP); //2

contadorP += 2;
console.log(contadorP); //4

contadorP += 2;
console.log(contadorP); //6

contadorP += 2;
console.log(contadorP); //8


//OBS: Erro, (Multiplicando uma string)
// NaN - Not a number
const numUm = 10;
const numDois = 'Daniel';
console.log(numUm * numDois); //NaN


// Resultado da multiplicação de um numero e uma string numero
const numUm1 = 10;
const numDois2 = '5';
console.log(numUm1 * numDois2); //50
console.log(typeof numDois2); //string

//converter string em numero, (3) maneiras
const numU = 10;
const numD = '5';
console.log(numU + numD); //105 (concatenação)
console.log(typeof numD); //string

//1, parseInt
const numU1 = 10;
const numD2 = parseInt('5'); //converte a string para um numero inteiro
console.log(numU1 + numD2); //15
console.log(typeof numD2); //number

//2, parseFloat
const nume1 = 10;
const nume2 = parseFloat('5.2'); //converte a string para um numero quebrado(float ponto flutuante)
console.log(nume1 + nume2); //15.2
console.log(typeof nume2); //number


const numer1 = 10;
const numer2 = Number('5.2'); //vai verificar se e numero inteiro, float, etc..
console.log(numer1 + numer2); //15.2
console.log(typeof numer2); //number


const numero1 = 10;
const numero2 = Number('5'); //vai verificar se e numero inteiro, float, etc..
console.log(numero1 + numero2); //15











