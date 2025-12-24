//ex1 Mais sobre strings
let umaString = 'Um "texto"';
let umaString1 = "Um 'texto'";
let umaStringUm = "Um \"texto\""; // \
let umaStringUm1 = "Um \\texto";

console.log(umaStringUm1);

//ex2 String tem um indice, 01234567
let varStr = "Um texto";

console.log(varStr[-1]);
console.log(varStr.charAt(6)); //retorna o elemento da posição 6, t
console.log(varStr.concat(' ', 'em', ' ', 'um')); //concatena

console.log(`${varStr} em um lindo dia`);

//ex3 pesquisando um indice
//começa do inicio ao fim
//             01234567
let varStr1 = "Um texto";

console.log(varStr1.indexOf('texto')); //3
console.log(varStr1.indexOf('o', 3)); //7


// começa do final para frente
//             01234567
let varStr2 = "Um texto";

console.log(varStr2.lastIndexOf('texto')); //3
console.log(varStr2.lastIndexOf('m', 3)); //7


//ex4 expressoes regulares
//             01234567
let varStr3 = "Um texto";

console.log(varStr3.match(/[a-z]/g)); //retorna todas as letras minusculas
console.log(varStr3.match(/[a-z]/));

console.log(varStr3.search(/[a-z]/));  //1
console.log(varStr3.search(/[x]/));  //5

// Ex5 substituir...
//             01234567
let varStr4 = "Um texto";

console.log(varStr4.replace('Um', 'Outra'));  //sub, texto 'Um' por 'Outra'
console.log(varStr4.replace(/Um/, 'Outra'));

//substitui todas as letras r
//             0123456789
let varStr5 = "O rato roeu a roupa do rei de roma."; //35 caracteres
console.log(varStr5.replace(/r/, '#')); // so 1 r
console.log(varStr5.replace(/r/g, '#')); // todos os r (flag, g)

//pega o tamanho da sctring
console.log(varStr5.length); //35 caracteres

//fatiar o texto rato
console.log(varStr5.slice(2, 5)); //rat
console.log(varStr5.slice(2, 6)); //rato (pegar um a +)

//...
//console.log(varStr5.length - 3); //32
console.log(varStr5.slice(-3)); //ma.
console.log(varStr5.slice(32)); //ma.

//...
//console.log(varStr5.slice(-5, varStr5.length - 1)); //roma
console.log(varStr5.slice(-5, - 1)); //roma


//...
console.log(varStr5.slice(-5, - 1)); //roma
console.log(varStr5.substring(varStr5.length, - 5)); //mostra toda a string


//ex7 dividir a string
let varStr6 = "O rato roeu a roupa do rei de roma."; //35 caracteres
console.log(varStr6.split(' '));
console.log(varStr6.split('r'));

console.log(varStr6.split(' ', 2));
console.log(varStr6.split(' ', 3));


//ex8 string toda em maiuscula
console.log(varStr6.toUpperCase());


//string toda em minuscula
console.log(varStr6.toLowerCase());






