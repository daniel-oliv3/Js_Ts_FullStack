/*Exercício com lógica de programação - 03*/
/*EX01 - Escrever uma função que recebar um numero e
- retorne o seguinte:
    - numero e divisivel por 3 = Fizz
    - numero e divisivel por 5 = Buzz
    - numero e divisivel por 3 e 5 =  retorna o proprio numero
    - checar se o numero e realmente um numero
    - use a função com numero de 0 a 100
*/
function fizzBuzz(numero){
    if(typeof numero !== 'number') return numero;
    if(numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if(numero % 3 === 0) return 'Fizz';
    if(numero % 5 === 0) return 'Fizz';
    return numero;
}


console.log('a', fizzBuzz('a'));
for(let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i));
}











