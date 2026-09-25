/*Exercício com lógica de programação - 01*/
//EX01 - Escreva uma função que receba 2 numeros e retorne o maior deles
function max(x, y){
    if(x > y){
        return x;
    }else{
        return y;
    }
}


const maior = max(10, 20);
console.log(maior); 



//EX02 - 
function max2(x, y){
    if(x > y) return x;
    return y;
}

console.log(max2(10, 2));



//EX03 - 
function max3(x, y){
    return x > y ? x : y;
}

console.log(max3(70, 22));



//EX04 - Arrow function
const max4 = (x, y) => {
    return x > y ? x : y;
}

console.log(max4(10, 32));



//EX05 - Arrow function
const max5 = (x, y) => x > y ? x : y;
console.log(max5(31, 45));

