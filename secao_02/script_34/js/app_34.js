//Exercício para função, array e objetos
/*Ex04*/
function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault();
        
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        });

        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }

   form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();



/*Ex03
function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault();
        
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        //console.log(nome.value, sobrenome, peso, altura);
        console.log(pessoas);
    }

   form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
*/


/*Ex02
function meuEscopo(){
    const form = document.querySelector('.form');

    let contador = 1;
    function recebeEventoForm(evento){
        evento.preventDefault();
        console.log(`Form não foi enviado ${contador}`);
        contador++;
    }

   form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
*/



/*Ex01
function meuEscopo(){
    const form = document.querySelector('.form');

    form.onsubmit = function (evento){
        evento.preventDefault();
        alert(1);
        console.log('Foi enviado...');
    };
}

meuEscopo();
*/



















