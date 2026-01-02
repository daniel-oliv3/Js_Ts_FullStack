/*Avaliação de Curto-Circuito (Short-Circuit)*/
console.log('Daniel Oliveira' && 0 && 'Maria'); // 0
console.log('Daniel Oliveira' && true && 'Maria'); //Maria
console.log('Daniel Oliveira' && true && NaN); //NaN

/*false...(FALSY)
0
'' "" ``
null / undefined
NaN
*/
console.log('Daniel Oliveira' && 'Sapup3'); //Sapup3
console.log('Daniel Oliveira' && '' && 'Sapup3'); // '..' espaço vazio
console.log('Daniel Oliveira' && undefined && 'Sapup3'); //undefined
console.log('Daniel Oliveira' && NaN && 'Sapup3'); //NaN


//Ex02
function falaOi(){
    return 'Oi';
}

//const vaiExecutar = false; //false
//const vaiExecutar = undefined; //undefined
//let vaiExecutar; //undefined
const vaiExecutar = 'Danielzinho'; //true 'Oi'

console.log(vaiExecutar && falaOi()); //false



// || Or
console.log(0 || false || null || 'Daniel Oliveira' || true); //Daniel Oliveira (primeiro valor verdadeiro)

//...
const corUsuario = null;
//const corPadrao = 'red';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao); //preto


//...
const corUsuario2 = 'vermelho';
const corPadrao2 = corUsuario2 || 'preto';

console.log(corPadrao2); //vermelho


//...
const a = 0;
const b = null;
const c = 'false'; //true
const d = false;
const e = NaN;

console.log(a || b || c || d || e); //c
console.log(a || b || 'Danielzinho'|| c || d || e); //Danielzinho


/*
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> retornar "o valor verdadeiro"
*/