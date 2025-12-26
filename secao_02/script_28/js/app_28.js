//Exercícios com numbers e Math
const numero = Number(prompt("Digite um número:"));

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada é: <strong>${numero ** 0.5}</strong></p>`;
texto.innerHTML += `<p>${numero} é inteiro: <strong>${Number.isInteger(numero)}</strong></p>`;
texto.innerHTML += `<p>É NaN: <strong>${Number.isNaN(numero)}</strong></p>`;
texto.innerHTML += `<p>Arrendondamento para baixo: <strong>${Math.floor(numero)}</strong></p>`;
texto.innerHTML += `<p>Arrendondamento para cima: <strong>${Math.ceil(numero)}</strong></p>`;
texto.innerHTML += `<p>Com duas casas decimais: <strong>${numero.toFixed(2)}</strong></p>`;















/*ex1

let numero = prompt("Digite um número:");
numero = Number(numero);

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
//texto.innerHTML = `<p>Seu número - 2 é: <strong>${numero - 2}</strong></p>`;
texto.innerHTML = `<p>Seu número + 2 é: <strong>${numero + 2}</strong></p>`;
*/



/*`Seu número é `;
`Raiz quadrada é `;
`_ é inteiro: `;
`É NaN: `;
`Arrendondamento para baixo `;
`Arrendondamento para cima`;
`Com duas casas decimais: `;
*/












