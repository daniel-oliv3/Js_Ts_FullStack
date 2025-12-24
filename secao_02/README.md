##
### Seção 2: JavaScript Básico - Para Iniciantes
##

<p align="center">
  <img alt="...." src="./src/js.png" width="50%">
</p>

### 7 - Console.log - A primeira coisa que você vai ver em JS

- Terminal `node app_07.js`

- Exemplo:
  - app_07

### 8 - Exercícios

- Exemplo:
  - app_08


### 9 - Repositório do curso no Github

Tudo o que você assistir nas aulas (o código que eu digito) está em um repositório no Github. Você pode acessá-lo via: https://github.com/luizomf/curso-js

Use o código apenas como referência em seções mais complexas. Tente digitar a maioria dos códigos, isso ajuda a fixar o conteúdo.

As alterações são enviadas ao final das aulas, com o conteúdo que determinado arquivo ficou ao terminar determinada aula.

Uma observação importante: as pastas não estão na ordem em que a Udemy cria automaticamente, mas na ordem de criação. Você vai me ver dizer em várias aulas que estou na pasta "Aula XXX", essa é a ordem que será apresentada no repositório (caso eu não fale, é só observar em qual pasta estou no vídeo).

Em algumas seções específicas, existem repositórios separados. Como as seções de API Rest, React ou TypeScript. Isso será especificado no início de cada seção.

- Exemplo:
  - app_09


### 10 - Comentários no código

- Exemplo:
  - app_10


### 11 - Navegador vs Node (HTML + JavaScript)

```js
// Comentário de uma unica linha


/* 
    Comentários de multiplas linhas
    console.log("Olá Mundo!");
    Texto/Código
*/
```

- Exemplo:
  - app_11


### 12 - Variáveis com let

- Exemplo:
  - app_12


### 13 - Preciso da sua ajuda

- Exemplo:
  - app_13


### 14 - Constantes com const

```js
/*
Não podemos criar constantes com palavras reservadas
constantes presizam ter nomes significativos
Não pode começar o nome de uma constantes com um número
Não pode conter espaços e traços
Utilizamos camelCase
case-sensitive
Não podemos modificar o valor de constante
Não utilizar var, utlizar let sempre
*/
```

- Exemplo:
  - app_14

### 15 - Correção

- Exemplo:
  - app_15

### 16 - Exercícios - Const e Let

- Exemplo:
  - app_16


### 17 - Código do exercício solucionado

- Abaixo o código completo do exercício anterior.

```js
/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80; // Corrigido para metros (ao invés de cm)
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;
 
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2019 - idade;
 
// template strings
 
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
```

- Exemplo:
  - app_17


### 18 - Let vs Var - Primeira diferença

- Exemplo:
  - app_18



### 19 - Tipos de dados primitivos

- Exemplo:
  - app_19



### 20 - Operadores aritméticos, de atribuição e incremento

- Exemplo:
  - app_20




### 21 - alert, confirm e prompt (Navegador)

- Exemplo:
  - app_21


### 22 - Exercícios - Solução

```js
// Exercícios - Solução

let num1 = prompt('Digite o primeiro número');
let num2 = prompt('Digite o segundo número');

num1 = Number(num1); 
num2 = Number(num2);

alert(`O resultado da multiplicação é: ${num1 + num2}`);

```

- Exemplo:
  - app_22