/*Exercícios com for*/
const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

//console.log(elementos);
const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++){
    //console.log(elementos[i]);
    //console.log(elementos[i].tag);
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    //tagCriada.innerHTML = texto;
    //tagCriada.innerText = texto;
    let textoCriado = document.createTextNode(texto);
    
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
    //console.log(tag);
}

container.appendChild(div);







