//Valores primitivos e valores por referência
/*Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) -> valores copiados
*/

/*objct*/
const a = {
    nome: 'Daniel',
    sobrenome: 'Oliveira'
};

//const b = a;
const b = {...a}; //spd

a.nome = 'Sapup';
console.log(a);
console.log(b);


/*...
let vrA = [1, 2, 3]; 
let vrB = [...vrA]; //copiado
let vrC = vrB;

console.log(vrA, vrB);

vrA.push(4);
console.log(vrA, vrB);

vrB.pop();
console.log(vrA, vrB);

vrA.push('Sapup3');
console.log(vrA, vrC);
*/

/*referencia(mutavel) -array, object, function -> passados por referencia
let vA = [1, 2, 3]; 
let vB = vA;
let vC = vB;

console.log(vA, vB);

vA.push(4);
console.log(vA, vB);

vB.pop();
console.log(vA, vB);

vA.push('Sapup3');
console.log(vC);
*/

/*...
let varA = 'A';
let varB = varA; //cópia
console.log(varA, varB);

varA = 'Outra coisa';
console.log(varA, varB);
*/

/*...
let nome = 'Daniel';
nome[0] = 'R';
console.log(nome[0], nome);
*/






