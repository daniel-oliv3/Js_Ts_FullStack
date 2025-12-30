/*Operadores de comparação*/
// > maior que
console.log(20 > 5);  //true

// < menor que
const comp = 10 < 5; //false
console.log(comp);

// >= maior ou igual
const comp1 = 10 >= 10; //true
console.log(comp1);

// <= menor ou igual
const comp2 = 10 <= 11; //true
console.log(comp2);

// == igualdade (NÃO UTILIZAR)
const comp3 = 10 == 11; //false
console.log(comp3);

// == igualdade (NÃO UTILIZAR) comparando number com string
const comp7 = 10 == '10'; //true
console.log(comp7);

// === igualdade estrita (valor e tipo)
const comp4 = 10 === 10; //true
console.log(comp4);

// === igualdade estrita (valor e tipo)
const comp8 = 10 === '10'; //false
console.log(comp8);

// === igualdade estrita (valor e tipo)
const comp9 = 10 === 10; //true
console.log(comp9);

// != diferente
const comp5 = 10 != 10; //false
console.log(comp5);

// != diferente
const comp10 = 10 != '10'; //false
console.log(comp10);

// !== diferente estrita (valor e tipo)
const comp6 = 10 !== 10; //false
console.log(comp6);


/*
> maior quer
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade (valor)
=== igualdade estrita (valor e tipo)
!= diferente (valor)
!== diferente estrito (valor e tipo)
*/