//Funções em JavaScript - Uma introdução ao básico
//EX8 - Arrow function ---------------------------------
const subtracao = (x, y) => {
    const resu = x - y;
    return resu;
};

console.log(subtracao(5, 3)); //2


//EX8 - Arrow function ---------------------------------
const raiz2 = n => n ** 0.5;

console.log(raiz2(9)); //3


//EX7 - Função anonima ---------------------------------
const raiz = function (n){
    return n ** 0.5;
}; //e preciso o ponto e virgula

console.log(raiz(9)); //3
console.log(raiz(16)); //4
console.log(raiz(25)); //5


//EX6 assumindo valores --------------------------
function multiplicacao(x = 3, y = 5){
    const res = x * y;
    return res;
}

const res = multiplicacao(4)
console.log(res); //20





//EX4 - Soma -------------------------------------
function soma(x, y){
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2)); //4
console.log(soma(5, 2)); //7



//EX5 - concatenado string ------------------------
function somaC(x, y){
    const resultado = x + y;
    return resultado;
}

const resultado = somaC('Daniel', ' Oliveira');
console.log(resultado); //Daniel Oliveira



//EX3 - função que retorna valor ------------------
function saudacao(nome){
    return `Olá, Mundo ${nome}!`; //retorno da função
}

const variavel = saudacao('Sapup3');
console.log(variavel); //exibe retorno da função




/*EX2 ---------------------------------------------
function saudacao(nome){
    console.log(`Olá, Mundo ${nome}!`);
    return 123456; //retorno da função
}

const variavel = saudacao('Sapup3');
console.log(variavel); //undefined
*/




/*EX1 ---------------------------------------------
function saudacao(nome){
    console.log(`Olá, Mundo ${nome}!`);
}

saudacao('Daniel');
saudacao('Priscila');
*/
















