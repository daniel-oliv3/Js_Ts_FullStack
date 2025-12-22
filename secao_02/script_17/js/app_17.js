//No exercício a seguir, você verá uma constante chamada de "altura" e depois modificada para "alturaEmCm", mais precisamente no seguinte trecho de código:

const nome = 'Daniel Oliveira';
const sobrenome = 'Souza';
const idade = 40;
const peso = 84;
const alturaEmCm = 1.80; // <-- NESTE LOCAL
let indiceMassaCorporal; /* peso / (altura * altura)  */
let anoNascimento;   


indiceMassaCorporal = peso / (alturaEmCm * alturaEmCm);
//anoNascimento = 2019 - idade;
anoNascimento = 1985;


console.log('---------------------------------------------------------');

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('tem', alturaEmCm, 'de altura e seu IMC é de', indiceMassaCorporal);
console.log(nome, 'nasceu em', anoNascimento, '.');


console.log('---------------------------------------------------------');


// +
console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg');
console.log('tem ' + alturaEmCm + ' de altura e seu IMC é de ' + indiceMassaCorporal);
console.log(nome + ' nasceu em ' + anoNascimento + ' .');

console.log(`---------------------------------------------------------`);


//template strings (``) 
console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`);
console.log(`tem ${alturaEmCm} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento} .`);



//Na verdade, este valor (1.80) está em metros, portanto, o nome da variável deveria ser "alturaEmM".
//Só vi isso na edição da aula, peço desculpas pelo erro.
//O código corrigido estará disponível após a aula.