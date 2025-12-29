//Objetos (Básico)
/*Ex04.2*/
const pessoaUm = {
    nome: 'Daniel',
    sobrenome: 'Oliveira',
    idade: 30,

    fala(){
        console.log(`A minha idade atual é: ${this.idade}`);
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoaUm.fala();
pessoaUm.incrementaIdade(); //30
pessoaUm.fala();
pessoaUm.incrementaIdade(); //31
pessoaUm.fala();
pessoaUm.incrementaIdade(); //32

/*Ex04.1
const pessoaUm = {
    nome: 'Daniel',
    sobrenome: 'Oliveira',
    idade: 30,

    fala(){
        //console.log('Olá Mundo!');
        console.log(`${this.nome} ${this.sobrenome} está falando Oi...`);
    }
};

pessoaUm.fala();
*/


/*Ex02
function criarPessoa(nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoaEx2 = criarPessoa('Sapup3', 'Oliv3', 25); //argum = valor
console.log(pessoaEx2);
console.log(pessoaEx2.nome);

const pessoaEx3 = criarPessoa('Daniel', 'Oliveira', 30);
const pessoaEx4 = criarPessoa('Priscila', 'Andrade', 25);
const pessoaEx5 = criarPessoa('Daniel', 'Victor', 1.5);

console.log(pessoaEx3);
console.log(pessoaEx4);
console.log(pessoaEx5);
console.log(pessoaEx4.nome, pessoaEx5.sobrenome);
*/


/*Ex01
const pessoa1 = {
    nome: 'Daniel',
    sobrenome: 'Oliveira',
    idade: 30
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

//ex...
const pessoa2 = {
    nome: 'Priscila',
    sobrenome: 'Andrade',
    idade: 30
};

console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
*/


/*Ex00
const array = [1, 2, 3];
array.push(4);
array[0] = 'Daniel';
//array = 'Priscila'; //const não func... let 
console.log(array);
*/





