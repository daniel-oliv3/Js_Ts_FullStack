/*Objeto Date*/
//Ex08
function zeroEsquerda(num){
    return num >= 10 ? num : `${num}`;
}

function formataData1(data8){
    const dia = zeroEsquerda(data8.getDate());
    const mes = zeroEsquerda(data8.getMonth() + 1); 
    const ano = zeroEsquerda(data8.getFullYear()); 
    const hora = zeroEsquerda(data8.getHours()); 
    const min = zeroEsquerda(data8.getMinutes());
    const seg = zeroEsquerda(data8.getSeconds());
    
    return `${dia}/${mes}/${ano}/${hora}/${min}/${seg}`; // 3/1/2026/12/9/48 - 3/1/2026/12/14/38
}

const data8 = new Date();
const dataBrasil = formataData1(data8);
console.log(dataBrasil);


//Ex07
function formataData(data7){
    console.log(data7); //2026-01-03T15:58:54.017Z
}

const data7 = new Date();
formataData(data7);


//Ex06
//const data6 = new Date('2025-01-03 11:20:59');
const data6 = new Date(1767455615598); //milesimos de segundos
console.log('Dia', data6.getDate());
console.log('Mês', data6.getMonth() + 1); //mês começa no indice 0
console.log('Ano', data6.getFullYear());
console.log('Hora', data6.getHours());
console.log('Minuto', data6.getMinutes());
console.log('Segundo', data6.getSeconds());
console.log('MS', data6.getMilliseconds());
console.log('Dia semana', data6.getDay()); // 0 -> domingo, 6 -> sabado
console.log(data6.toString()); //Sun Apr 20 2025 20:20:59 GMT-0400 (Horário Padrão do Amazonas)

//..
console.log(Date.now());

//Ex05
const data5 = new Date('2025-04-20 20:20:59');
console.log(data5.toString()); //Sun Apr 20 2025 20:20:59 GMT-0400 (Horário Padrão do Amazonas)


//Ex04
const data4 = new Date(2019, 3, 20, 15, 14, 27, 500);
console.log(data4.toString()); //Sat Apr 20 2019 15:14:27 GMT-0400 (Horário Padrão do Amazonas)


//Ex03...
const tresHora = 60 * 60 * 3 * 1000; //3 horas
const umDia = 60 * 60 * 24 * 1000;
const data3 = new Date(0 + tresHora + umDia);
console.log(data3.toString()); // Thu Jan 01 1970 23:00:00 GMT-0400 (Horário Padrão do Amazonas)


//Ex02...
const tresHoras = 60 * 60 * 3 * 1000; //3 horas
const data2 = new Date(0 + tresHoras);
console.log(data2.toString());

//Ex01...
const data1 = new Date(0); //01/01/1970 Timestamp unix ou epoca unix
const data = new Date(); //função construtora

console.log(data.toString()); //Sat Jan 03 2026 10:25:16 GMT-0400 (Horário Padrão do Amazonas)
console.log(data1.toString()); // Wed Dec 31 1969 20:00:00 GMT-0400 (Horário Padrão do Amazonas)




