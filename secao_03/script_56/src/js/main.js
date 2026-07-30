/*For of - Estrutura de repetição*/

//EX01
//const nome = 'Daniel Oliveira';
//const nomes = ['Daniel', 'Sapup3', 'Spike'];

/*for(let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}*/

/*for(let i in nome){
    console.log(nome[i]);
}*/

/*for(let valor of nomes){ //of. somente o valor, indice não
    console.log(valor);
}*/

/*nomes.forEach(function(valor){
    console.log(valor);
});*/


/*nomes.forEach(function(valor, indice){
    console.log(valor, indice);
});*/


/*nomes.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});*/


//Ex02
const pessoa = {
    nome: 'Daniel',
    sobrenome: "Oliveira"
};

for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
}


/*
For clássico - geralmente com a interavéis (array ou string) 
For in - retorna o indice ou chave (string, array ou objetos)
For of - retorna o valor em si (string, array ou objetos)

*/






