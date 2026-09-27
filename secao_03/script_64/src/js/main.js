/*Tratando e lançando erros (try, catch, throw)*/
/*EX01 - 
try{
    //E executado quando não ha erros
}catch(e){
    //E executado quando ha erros
}finally{
    //Sempre
}
*/



/*Ex02
try{
    console.log(a); //error
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro!');
    console.log('Fechei o arquivo');
}catch(e){
    console.log('Tratando o erro');
}finally{
    console.log('FINALLY: Eu sempre sou executado!');
}
*/



/*Ex03
try{
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro!');
    console.log('Fechei o arquivo');

    try{
        console.log(b);
    }catch(e){
        console.log('Deu erro!');
    }finally{
        console.log('Também sou finally!');
    }


}catch(e){
    console.log('Tratando o erro');
}finally{
    console.log('FINALLY: Eu sempre sou executado!');
}
*/



/*Ex04
function retornaHora(data){
    if(!(data instanceof Date)){
        //console.log('Não é!');
        throw new TypeError('Esperando instancia de Date.');
    }
}

//retornaHora('ABCDS');
retornaHora(new Date());
*/



/*Ex05*/
function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instancia de Date.');
    }
    if(!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}


try{
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(11);
    console.log(hora);
}catch(e){
    //Tratar erro
    //console.log(e);
}finally {
    console.log('Tenha um bom dia!');
}






