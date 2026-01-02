/*if, else if e else (2)*/

//Ex01...
const num = 10;
//const num = -1;

if(num >= 0){
    console.log('Sim, O número é maior ou igual a zero!')
}

//Ex02...
const nume = 10;
//const nume = 1;
//const nume = 5;

if(nume >= 0 && nume <= 5){ //true
    console.log('Sim, O número esta entre 0 e 5!');
} else { //false
    console.log('Não, O número não esta entre 0 e 5!')
}

//Ex03...
//const numer = 1;
//const numer = 7;
//const numer = 9;
const numer = 50;

if(numer >= 0 && numer <= 5){ 
    console.log('O número esta entre 0 e 5!');
} else if (numer >= 6 && numer <= 8){ 
    console.log('O número esta entre 6 e 8!');
}else if (numer >= 9 && numer <= 11){ //verdadeiro
    console.log('O número esta entre 9 e 11!');
} else {
    console.log('O número não esta entre 0 e 11!');
}


//Ex04...
//const numero = 1;
//const numero = 7;
//const numero = 9;
const numero = 10;

if(numero >= 0 && numero <= 5){ 
    console.log('O número esta entre 0 e 5!');
} else if (numero >= 6 && numero <= 8){ 
    console.log('O número esta entre 6 e 8!');
} else if (1 === 1) { //verdadeiro
     console.log('O número 1 e igual 1 (=== Literal)');
}else if (numero >= 9 && numero <= 11){ //verdadeiro
    console.log('O número esta entre 9 e 11!');
} else {
    console.log('O número não esta entre 0 e 11!');
}

console.log('...Aqui vem o resto do codigo!');


//Ex05...
//const numero1 = 1;
//const numero1 = 7;
//const numero1 = 9;
const numero1 = 10;

if(1 === 1) { //verdadeiro
    console.log("Literal");
}

if(numero1 >= 0 && numero1 <= 5){ 
    console.log('O número esta entre 0 e 5!');
} else if (numero1 >= 6 && numero1 <= 8){ 
    console.log('O número esta entre 6 e 8!');
} else if (numero1 >= 9 && numero1 <= 11){ //verdadeiro
    console.log('O número esta entre 9 e 11!');
} else {
    console.log('O número não esta entre 0 e 11!');
}

console.log('...Aqui vem o resto do codigo!(2)');



//Ex06...
//const numero2 = 1;
//const numero2 = 7;
//const numero2 = 9;
const numero2 = 10;

if(numero2 <= 10) { //verdadeiro
    console.log("O número e menor ou igual a 10");
}

if(numero2 >= 0 && numero2 <= 5){ 
    console.log('O número esta entre 0 e 5!');
} else if (numero2 >= 6 && numero2 <= 8){ 
    console.log('O número esta entre 6 e 8!');
} else if (numero2 >= 9 && numero2 <= 11){ //verdadeiro
    console.log('O número esta entre 9 e 11!');
} else {
    console.log('O número não esta entre 0 e 11!');
}

console.log('...Aqui vem o resto do codigo!(3)');




//console.log('Não, O número não esta entre 0 e 5!');


/*
If, se
Else, se não
*/














