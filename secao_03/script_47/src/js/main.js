/*Switch/Case*/
//Ex04....switch case
function getDiaSemanaTexto(diaSemana4) {
  let diaSemanaTexto4;
  
  switch (diaSemana4) {
    case 0:
      diaSemanaTexto4 = "Domingo";
      return diaSemanaTexto4;
    case 1:
      diaSemanaTexto4 = "Segunda";
      return diaSemanaTexto4;
    case 2:
      diaSemanaTexto4 = "Terça";
      return diaSemanaTexto4;
    case 3:
      diaSemanaTexto4 = "Quarta";
      return diaSemanaTexto4;
    case 4:
      diaSemanaTexto4 = "Quinta";
      return diaSemanaTexto4;
    case 5:
      diaSemanaTexto4 = "Sexta";
      return diaSemanaTexto4;
    case 6:
      diaSemanaTexto4 = "Sabado";
      return diaSemanaTexto4;
    default:
      diaSemanaTexto4 = "";
      return diaSemanaTexto4;
  }
}

const data4 = new Date('1985-08-13 00:00:00');
let diaSemana4 = data4.getDay();
const diaSemanaTexto4 = getDiaSemanaTexto(diaSemana4);


console.log(diaSemana4, diaSemanaTexto4);

//Ex03....switch case
/*const data3 = new Date();
let diaSemana3 = data3.getDay();
//diaSemana3 = 7;
diaSemana3 = 4;
let diaSemanaTexto3;

switch (diaSemana3) {
  case 0:
    diaSemanaTexto3 = "Domingo";
    break;
  case 1:
    diaSemanaTexto3 = "Segunda";
    break;
  case 2:
    diaSemanaTexto3 = "Terça";
    break;
  case 3:
    diaSemanaTexto3 = "Quarta";
    break;
  case 4:
    diaSemanaTexto3 = "Quinta";
    break;
  case 5:
    diaSemanaTexto3 = "Sexta";
    break;
  case 6:
    diaSemanaTexto3 = "Sabado";
    break;
  default:
    diaSemanaTexto3 = "";
    break; //não obrigatorio
}

console.log(diaSemana3, diaSemanaTexto3);
*/

//Ex02.....
//const data2 = new Date('1985-08-13 00:00:00');
const data2 = new Date(); //6, sábado
let diaSemana2 = data2.getDay();
let diaSemanaTexto;

if (diaSemana2 === 0) {
  diaSemanaTexto = "Domingo";
} else if (diaSemana2 === 1) {
  diaSemanaTexto = "Segunda";
} else if (diaSemana2 === 2) {
  diaSemanaTexto = "Terça";
} else if (diaSemana2 === 3) {
  diaSemanaTexto = "Quarta";
} else if (diaSemana2 === 4) {
  diaSemanaTexto = "Quinta";
} else if (diaSemana2 === 5) {
  diaSemanaTexto = "Sexta";
} else if (diaSemana2 === 6) {
  diaSemanaTexto = "Sábado";
} else {
  diaSemanaTexto = "";
}

console.log(diaSemana2, diaSemanaTexto);

//Ex01....
const data = new Date();
const diaSemana = data.getDay();

console.log(diaSemana); //6

/*0 domingo, 1 segunda, 2 terça, 3 quarta, 4 quinta, 5 sexta, 6 sábado*/
