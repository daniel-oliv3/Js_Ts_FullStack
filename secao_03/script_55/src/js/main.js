/*For in - Estrutura de repetição*/
//Ex03
const pessoa = {
    nome: 'Daniel',
    sobrenome: 'Oliveira',
    idade: 30
};

for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
}


//console.log(pessoa.nome);
//console.log(pessoa['nome']);




/*Ex02
//               0       1       2
const frutas = ['Pera', 'Maça', 'Uva'];

for(let indice in frutas){
    console.log(frutas[indice]);
}
*/



/*//Ex01
for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}
*/


/*For in -> lê os indices ou chaves do objeto*/