//Um pouco mais sobre os numbers em JavaScript
//IEEE 754 - 2008
let num1 = 10.58765434665344400; //number
let numUm = 10;
let num2 = 2.5;
let numDois = 1;

//console.log(num1.toString() + num2);
//num1 = num1.toString();
//console.log(typeof num1);

//console.log(num1.toString(2)); //num binario

//console.log(num1.toFixed(2));

//console.log(Number.isInteger(numUm)); //true
//console.log(Number.isInteger(num2)); //false

//let temp = numUm * 'Ola';
//let temp = numUm * '5';
//console.log(Number.isNaN(temp)); //

//...
let numOne = 0.7;
let numTwo = 0.1;

/*numOne += numTwo; //0.8
numOne += numTwo; //0.9
numOne += numTwo; //1.0
numOne += numTwo; //1.1
numOne += numTwo; //1.2
numOne += numTwo; //1.3
numOne += numTwo; //1.4
numOne += numTwo; //1.5
numOne += numTwo; //1.6
numOne += numTwo; //1.7
numOne += numTwo; //1.8
numOne += numTwo; //1.9
numOne += numTwo; //2.0*/

//numOne = numOne.toFixed(2);
//console.log(numOne + numTwo);

//numOne = parseFloat(numOne.toFixed(2));

/*numOne = ((numOne * 100) + (numTwo * 100)) / 100; //0.8
numOne = ((numOne * 100) + (numTwo * 100)) / 100; //0.9
numOne = ((numOne * 100) + (numTwo * 100)) / 100; //1.0 */

numOne = Number(numOne.toFixed(2));

console.log(numOne);
console.log(Number.isInteger(numOne));





