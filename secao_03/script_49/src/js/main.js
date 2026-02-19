/*Mais diferenças entre var e let/const*/
/*
Let tem escopo de bloco {... bloco }
Var só tem escopo de funcao
*/


console.log(sobreNome); //undefined


//var sobreNome = 'Souza';
let sobreNome = 'Souza';


/*Ex03
var sobreNome = 'Oliveira';

function falaOi(){
    var nome = 'Daniel';
    //console.log('Olá, Mundo!');
    //console.log(nome);
    console.log(sobreNome);
}

falaOi();
*/






/*Ex02
const verdadeira = true;

let nome1 = 'Daniel';
var nome2 = 'Sapup3';


var nome2 = 'Oliveira'; //re-declarada
if(verdadeira){
    let nome1 = 'Skater'; //criando

    if(verdadeira){
        let nome1 = 'Victor';
    }
}
*/





/*Ex01
const verdadeira = true;

let nome1 = 'Daniel';
var nome2 = 'Sapup3';

if(verdadeira){
    let nome1 = 'Skater'; //criando
    //console.log('Ok!', nome1, nome2);

    if(verdadeira){
        let nome1 = 'Danny';
        console.log('Oqueijo!', nome1);
    }
}
*/











