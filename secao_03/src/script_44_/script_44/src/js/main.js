/*1 - captura evento de submit do formulario*/
const form = document.querySelector("#formulario");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  //console.log('Evento previnido');
  //setResultado('Olá, Mundo!');
  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");
  //console.log(inputPeso);
  //console.log(inputAltura);
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);
  //console.log(peso, altura);

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
  //console.log('Cheguei aqui!');
  //console.log(imc, nivelImc);
  //continua o código...
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

  /*if (imc >= 39.9) {
    return nivel[5];
  } else if (imc >= 34.9) {
    return nivel[4];
  } else if (imc >= 29.9) {
    return nivel[3];
  } else if (imc >= 24.9) {
    return nivel[2];
  } else if (imc >= 18.5) {
    return nivel[1];
  } else if (imc < 18.5) {
    return nivel[0];
  }
}*/

    /*if (imc >= 39.9) {
        return nivel[5];
    }

    if (imc >= 34.9) {
        return nivel[4];
    } 

    if (imc >= 29.9) {
        return nivel[3];
    }

    if (imc >= 24.9) {
        return nivel[2];
    } 

    if (imc >= 18.5) {
        return nivel[1];
    } 

    if (imc < 18.5) {
        return nivel[0];
    }*/

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
  //resultado.innerHTML = msg;
  //resultado.innerHTML = `<p>${msg}</p>`;
  resultado.innerHTML = "";
  //resultado.appendChild(p);

  const p = criaP();

  if(isValid){
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
