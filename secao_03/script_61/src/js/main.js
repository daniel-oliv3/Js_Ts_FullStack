/*Exercício com lógica de programação - 02*/
//EX01 - Excrever uma função chamada ePaisagem() que receba dois argumentos(1, 2), largura e altura de uma imagem (number). Retorne true se a iamagem estiver no modo paisagem
function ePaisagem(largura, altura){
    return largura > altura ? true : false;
}

//console.log(ePaisagem(1920, 1080));
console.log(ePaisagem(1080, 1920));


//Ex02
function ePaisagem2(largura, altura){
    return largura > altura;
}

console.log(ePaisagem2(1080, 1920));



//Ex03 Arrow Functions
const ePaisagem3 = (largura, altura) =>
    largura > altura;

console.log(ePaisagem3(1920, 1920));











