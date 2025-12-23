// Tipos de dados primitivos
//string, number, undefined, null, booleam, symbol

const nome = 'Daniel'; //string, aspas simples
const nome1 = "Daniel"; //string, aspas duplas
const nome2 = `Daniel`; //crase

const num1 = 10; //number
const num2 =10.52; 

let nomeAluno; //undefined = não aponta para lugar nenhum na memoria
const sobreNomeAluno = null; // Nulo -> não aponta para nenhum local na memoria

let sobreNomeAluno1 = 'Spiker';


//boolean = true, false (lógico)
const aprovado = true; // sim
const aprovado1 = false; // não


console.log(typeof nome);
console.log(typeof nome, nome);

console.log(typeof num1);
console.log(typeof sobreNomeAluno);


let a1 = 2;
let b1 = a1;
console.log(a, b); //2, 2

a = 3
console.log(a, b); //3, 2



//Passado por referencia (Proximas aulas)
const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b);













