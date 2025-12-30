/*Operadores Lógicos*/

//compração dinheiro e sol (&&) todas comparações verdadeiras, para retornar verdadeiro 
console.log(true && true); //true

//compração AND (&&) 
console.log(true && false); //false

//compração OR (||) apenas um verdadeiro, para retornar verdadeiro
console.log(true || false); //true

//compração OR (||)
console.log(false || false); //false

//compração NOT (!) negação
console.log(false); //false
console.log(!false); //true
console.log(!true); //false
console.log(!!true); //true

//..
const usuario = 'Daniel';
const senha = '123456';

const vaiLogar = usuario === 'Daniel' && senha === '123456';
console.log(`Seja bem vindo, ${usuario}`); 
console.log(vaiLogar); //true




/*
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO
*/



