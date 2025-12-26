//Arrays (Básico)

//              0123456789.....
//const nome = 'Daniel Oliveira'
// console.log(nome[0]);

//               0         1           2
const alunos = ['Daniel', 'Priscila', 'Victor'];
//console.log(alunos);
console.log(alunos[1]); //Priscila

alunos[0] = 'Sapup3';
console.log(alunos[0]); //alterando o valor do array

alunos[3] = 'Belinha'; //adicionando um novo elemento no array
console.log(alunos);  //exibe no console do browser
console.log(alunos.length); //...

//adcionando um novo elementos, no array
alunos[alunos.length] = 'Jack'; //adiciona no fim
alunos[alunos.length] = 'Kate'; //5
alunos[alunos.length] = 'Sawyer'; //6 indice(0 a 6) = 7

console.log(alunos); 
console.log(alunos.length); 

//adicionando elementos no array, Push(fim)
alunos.push('Otávio'); 
alunos.push('Maria');  //adiciona no fim, do array

console.log(alunos); 
console.log(alunos.length); 

//adiciona no começo, do array
alunos.unshift('John'); 
console.log(alunos); 
console.log(alunos.length);

//removendo elemento do final do array
alunos.pop('');  //adiciona no fim
console.log(alunos); 
console.log(alunos.length);

//...
const removidoFim = alunos.pop();
console.log(removidoFim); //Otávio
console.log(alunos.length);

//removendo elemento do inicio do array
const removidoIni = alunos.shift(); //adiciona no inicio
console.log(removidoIni); //John
console.log(alunos.length);

//remover sem alterar o indice
delete alunos[1]; 
console.log(alunos); //empty

//acessando indice que não existe (undefined)
console.log(alunos[50]); //undefined

//add
alunos.push('Gabriel');
alunos.push('Jessica');  

console.log(alunos);
console.log(alunos.length);
console.log(alunos.slice(0, 3)); //elemento 2
//console.log(alunos.slice(0, -1));

console.log(typeof alunos); //object
console.log(alunos instanceof Array); //true




