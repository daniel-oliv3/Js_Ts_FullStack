/*Tratando e lançando erros (try, catch, throw)*/
/*EX01 - 
try{
    console.log(naoExisto);
}catch(err){
    console.log('nãoExisto não existe');
    console.log(err);
}
*/


/*Ex02*/
function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser números.!');
    }
    return x + y;
}

try{
    console.log(soma(1, 2));
    console.log(soma('1', 2)); //error
}catch(error){
    //console.log(error);
    console.log('Alguma coisa mais amigavel para o usuario.');
}