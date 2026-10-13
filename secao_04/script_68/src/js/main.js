/*As várias maneiras de declarar funções em JavaScript*/

//declaração de função
function falaOi(){
  console.log('Olá, Mundo!');
}

falaOi();


//First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function(){
  console.log("Sou um dado.");
};

souUmDado();


//...
function executaFuncao(funcao){
  console.log('Vou executar sua função abaixo!');
  funcao();
}

executaFuncao(souUmDado);


//arrow function
const funcaoArrow = () => {
  console.log("Sou uma arrow function");
};

funcaoArrow();


//Dentro de um objeto...
const obj = {
  falar: function(){
    console.log("Estou falando...");
  }
};

obj.falar();