/*Atribuição via desestruturação (Objetos)*/

//Ex05 
const pessoa = {
    nome: 'Daniel',
    sobrenome: 'Oliveira',
    idade: 30,
    endereco: {
        rua: 'Angra dos Reis',
        numero: 31
    }
};

const { nome, ...resto} = pessoa; 
//console.log(resto);
console.log(nome, resto);



/*Ex04 
const pessoa = {
    nome: 'Daniel',
    sobrenome: 'Oliveira',
    idade: 30,
    endereco: {
        //rua: 'Angra dos Reis',
        numero: 31
    }
};

const {
    endereco:{ rua: r = 5202, numero},
    endereco
} = pessoa; 
console.log(r, numero, endereco);
*/




/*Ex03 
const pessoa = {
    nome: 'Daniel',
    sobrenome: 'Oliveira',
    idade: 30,
    endereco: {
        rua: 'Angra dos Reis',
        numero: 31
    }
};

//const { nome: teste = '', sobrenome} = pessoa; 
//console.log(teste, sobrenome); //teste assume o valor de nome

//const { nome, sobrenome, endereco} = pessoa; 
//console.log(nome, sobrenome, endereco);

const { endereco: { rua, numero } } = pessoa; 
console.log(rua);
*/


/*Ex02 
const pessoa = {
    nome: 'Daniel',
    sobrenome: 'Oliveira',
    idade: 30,
    endereco: {
        rua: 'Angra dos Reis',
        numero: 31
    }
};

//const { nome, sobrenome, idade } = pessoa; //Atribuição via desestruturação
console.log(nome, sobrenome, idade);
//const { nome = '', sobrenome, idade } = pessoa;
const { nome = 'Não Existe', sobrenome, idade } = pessoa;
*/



/*Ex01
const pessoa = {
    nome: 'Daniel',
    sobrenome: 'Oliveira',
    idade: 30,
    endereco: {
        rua: 'Angra dos Reis',
        numero: 31
    }
};

//console.log(pessoa);
console.log(pessoa.nome);

const nome = pessoa.nome;
console.log(nome);
console.log(sobrenomenome);
*/



