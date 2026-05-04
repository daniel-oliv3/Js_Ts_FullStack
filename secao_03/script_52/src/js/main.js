/*For - Clássico - Estrutura de repetição*/

/*Ex01
console.log('Linha 0');
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5');
*/


/*Ex02
for(let i = 0; i <= 5; i++){
    console.log('Linha ', i);
}
*/


/*Ex03
for(let i = 0; i <= 5; i++){
    console.log(`Linha ${i}`);
}
*/

/*Ex04
for(let i = 400; i <= 500; i++){
    console.log(`Linha ${i}`);
}
*/

/*Ex05
for(let i = 400; i <= 500; i += 10){
    console.log(`Linha ${i}`);
}
*/

/*Ex06
for(let i = 500; i >= 400; i-= 10){
    console.log(`Linha ${i}`);
}
*/

/*Ex07
for(let i = 0; i <= 10; i++){
    const par = i % 2 === 0;
    console.log(i, par);
}
*/


/*Ex08
for(let i = 0; i <= 10; i++){
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}
*/

//Ex09
const frutas = ['Maçã', 'Pêra', 'Uva'];

for(let i = 0; i < frutas.length; i++){
    //console.log(frutas[i]);
    console.log(`Indice ${i}`, frutas[i]);
}

//console.log(frutas[1]);
//console.log(frutas.length);