/*Operação ternária (? :)*/

//Ex03 op ternario, ou and....
//const pontUsu = 1000;
const pontUsu = 500;

const nivelUsu = pontUsu >= 1000 ? 'Usuário VIP' : 'Usuário normal';

//const corUsu = null;
const corUsu = 'pink';
const corPadrao = corUsu || 'Preta';

console.log(nivelUsu, corUsu);



//Ex02 op ternario....
const pontUsuario = 1000;
//const pontUsuario = 500;

const nivelUsuario = pontUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario);



//Ex01....
const pontuacaoUsuario = 999;
//const pontuacaoUsuario = 1000;

if(pontuacaoUsuario >= 1000){
  console.log("Usuário Vip");
} else {
  console.log("Usuário Normal");
}



/* (Condição) ? 'Valor para verdadeiro' : 'Valor para falso'; */







