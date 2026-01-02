/*if, else if e else (1)*/

//const hora = 10;
const hora = 13;

if(hora <= 12){
    console.log('Bom dia!');
    //console.log(1 + 1);
} 


//.. if, else (entre 0 e 11 horas, bom dia, 12 a 17 boa tarde, 18 a 23 boa noite)
//const horaDia = 10;
//const horaDia = 13;
//const horaDia = 18;
const horaDia = 11;

if(horaDia >= 0 && horaDia <= 11){
    console.log('Bom dia!');
} else if(horaDia >= 12 && horaDia <= 17){
    console.log('Boa Tarde!');
} else if(horaDia >= 18 && horaDia <= 23){
    console.log('Boa Noite!');
}else {
    console.log("Erro no sistema!");
}


//Ex03 ...
//const tenhoGrana = true;
const tenhoGrana = false;
//const tenhoGrana = NaN; //false, ->else


if(tenhoGrana){
    console.log('Vou sair de casa!');
} else {
    console.log('Não vou sair de casa!');
}


//...
//const tenhoGrana1 = false;
const tenhoGrana1 = true;


if(tenhoGrana1){
    console.log('Vou sair de casa!');
} 





/*
If pode ser usado sozinho
Sempre que utilizar a palavra else, preciso de um if antes
Eu posso ter varios else ifs na checagem
So posso ter um else na checagem
Podemos usar condições sem else if, utilizando apenas if e else
*/






