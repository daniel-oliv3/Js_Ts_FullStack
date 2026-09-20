/*59 - Break e Continue*/
//EX01 Continue
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let numero of numeros){
    
    if(numero == 2){
        console.log('Pulei o Número 2');
        continue;
    }
    console.log(numero);
}

//EX02 Break
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let numero2 of numeros2){
    
    if(numero2 === 2){
        console.log("Pulei o número 2");
        continue;
    }

    if(numero2 == 7){
        console.log('7 encontrado, saindo...');
        break;
    }
    console.log(numero2);
}














