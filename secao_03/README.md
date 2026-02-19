##
### Seção 3: JavaScript - Lógica de Programação
##

<p align="center">
  <img alt="...." src="./src/js.png" width="50%">
</p>


### 35 - Sobre lógica

- Exemplo:
  - app_35


### 36 - Extensões que utilizo no VSCode

- Extensões
  - Code Runner
  - Code Time
  - Django
  - EJS language support
  - Git Graph
  - Python
  - StandardJS JavaScript Standard Style
  - Dracula official
  - Material icon theme

- Exemplo:
  - app_36


### 37 - Operadores de comparação

- **Operadores de comparação**
  - `>` Maior quer
  - `>=` Maior que ou igual a
  - `<` Menor que
  - `<=` Menor que ou igual a
  - `==` Igualdade (valor)
  - `===` Igualdade estrita (valor e tipo)
  - `!=` Diferente (valor)
  - `!==` Diferente estrito (valor e tipo)

- Exemplo:
  - app_37


### 38 - Operadores Lógicos

- **Operadores Lógicos**
  - `&&` -> `AND` -> `E`
  - `||` -> `OR` -> `OU`
  - `!` -> `NOT` -> `NÃO`

- Exemplo:
  - app_38



### 39 - Avaliação de Curto-Circuito (Short-Circuit)

- Exemplo:
  - app_39



### 40 - if, else if e else (1)

- Exemplo:
  - app_40

### 41 - if, else if e else (2)


- Exemplo:
  - app_41


### 42 - Modelo HTML e CSS para exercícios posteriores

- Gerador de textos Aleatórios
  - Site: https://mussumipsum.com/

- Fonts
  - Site: https://fonts.google.com/specimen/Open+Sans

`@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400,700&display=swap');`

- Exemplo:
  - app_42

### 43 - Nota sobre o próximo exercício

Nota sobre o próximo exercício
A próxima aula será um exercício onde vamos aplicar todo o conhecimento aprendido até aqui, porém, pode ser um tanto intimidador para iniciantes unir todo o conhecimento em uma única aula.

Se você se sentir preso(a) em algum momento ao realizar o exercício, minha sugestão é que você siga digitando comigo enquanto crio a minha solução.

Ainda temos muitas aulas para fixar muito mais todo o seu conhecimento.


- Exemplo:
  - app_43



### 44 - Exercício (unindo tudo aprendido até aqui e mais)

- HTML

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calcule seu IMC</title>
    <link rel="shortcut icon" href="./src/img/favicon96.png" />
    <link rel="stylesheet" href="./src/css/style.css" />
  </head>
  <body>
      <section class="container">  
      <h2>Calcule seu IMC</h2>
      <form action="/" id="formulario" method="post">
        <label for="peso">Peso:</label>
        <input type="text" id="peso" name="peso"/>

        <label for="altura">Altura</label>
        <input type="text" id="altura" />
        <button type="submit">Calcular</button>
      </form>
      <div id="resultado"></div>
    </section>

    <script src="./src/js/main.js"></script>
  </body>
</html>

<!--
    Autor: Daniel Oliveira
    Email: danieloliveira.webmaster@gmail.com
    Manaus/Amazonas/Brasil
    03/01/2026
-->
```

- CSS

```css
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400,700&display=swap');

:root {
    --primary-color:rgb(13, 106, 134);
    --primary-color-dark:rgb(9, 48, 100);
}

* {
    box-sizing: border-box;
    outline: 0;
}

body {
    margin: 0;
    padding: 0;
    background: var(--primary-color);
    font-family: 'Open sans', sans-serif;
    font-size: 1.3em;
    line-height: 1.5em;
}

.container {
    max-width: 640px;
    margin: 50px auto;
    background: #fff;
    padding: 20px;
    border-radius: 10px;  
}

form input, form label, form button {
    display: block;
    width: 100%;
    margin-bottom: 10px;
}

form input {
    font-size: 24px;
    height: 50px;
    padding: 0 20px;
}

form input:focus {
    outline: 1px solid var(--primary-color);
}

form button {
    border: none;
    background: var(--primary-color);
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    height: 50px;
    cursor: pointer;
    margin-top: 30px;
}

form button:hover {
    background: var(--primary-color-dark);
}

/**/
.paragrafo-resultado, .bad {
    background: rgb(109, 255, 182);
    padding: 10px 20px;
}

.bad {
    background: rgb(214, 29, 29);
}
```

- JavaScript

```js
/*1 - captura evento de submit do formulario*/
const form = document.querySelector("#formulario");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado("Peso inválido!", false);
    return;
  }

  if (!altura) {
    setResultado("Altura inválido!", false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResultado(msg, true);
});

//FUNCTIONS
function getNivelImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

//...
function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP(className) {
  const p = document.createElement("p"); //criando um paragrafo
  return p;
}

/*Função exibe resultado*/
function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";

  const p = criaP();

  if (isValid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("bad");
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
```

- Exemplo:
  - app_44




### 45 - Operação ternária

- Terminal do vscode
  - `node main.js`

- Exemplo:
  - app_44

### 46 - Objeto Date

- MDN Object Date
  - Site: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

- Exemplo:
  - app_46



### 47 - Switch/Case

- Exemplo:
  - app_47
  

### 48 - Exercício com switch e date

- Musssum Ipsum
  - Site: https://mussumipsum.com/

```js
//Ex03 the best
const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short'});
```


- Exemplo:
  - app_48


### 49 - Mais diferenças entre var e let/const

- Exemplo:
  - app_49

