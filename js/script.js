let mensagemInicio = document.querySelector('#mensagem'); //mensagem inicial
let metodoCodigo = document.querySelector("#metodoCodigo"); //cesar ou base64
let nCesar = document.querySelector("#nCesar"); //selecione o número de cesar
let btnCodificar = document.querySelector('#btnCodificar'); //botão codificar
let btnDecodificar = document.querySelector('#btnDecodificar'); //botão decodificar
let mensagemResult = ""; // resultado do processo
let inputs = [mensagemInicio, mensagemResult];


let selectNcesar = document.querySelector('#selectNcesar'); //campo com numeração para Cifra de Cesar
let selectBotoes = document.querySelector('#selectBotoes'); //div com os botões
let containerResultado = document.querySelector('.container-resultado'); //div com o resultado



//CONVERTER ENTRADAS EM MAIÚSCULAS

inputs.forEach ( input => {
  input.oninput = () => {
      input.value = input.value.toUpperCase();
  }
});

//SELECIONAR QUAL CODIFICAÇÃO DESEJA

let select = addEventListener('click', function(){
  metodoCodigo = document.querySelector("#metodoCodigo").value;
  if (metodoCodigo == "cesar"){
    selectNcesar.style.display = 'flex';
    selectBotoes.style.display = 'flex';
  } else if (metodoCodigo == "base64"){
    selectNcesar.style.display = 'none';
    selectBotoes.style.display = 'flex';
  }
});

// CODIFICAR

function codificar(){
  containerResultado.style.display = 'grid';
  if (metodoCodigo = document.querySelector("#metodoCodigo").value == "cesar") {
      
    let mensagemInicio = document.querySelector('#mensagem').value;
    let solved = '';
    let nCesar = parseInt(document.querySelector("#nCesar").value);
  
    for (let i = 0; i < mensagemInicio.length; i++){
      let ascii_num = mensagemInicio[i].charCodeAt();
      let soma = ascii_num + nCesar;
      soma >= 65 && soma <= 90 ? solved += String.fromCharCode(soma) : soma > 90 ? solved += String.fromCharCode(65 + (soma % 91)) : solved += mensagemInicio[i];
    }

    mensagemResult = solved;

  } else if (metodoCodigo = document.querySelector("#metodoCodigo").value == "base64"){
    let mensagemInicio = document.querySelector('#mensagem').value;
    let encoded = window.btoa(mensagemInicio);

    mensagemResult = encoded;
  }
  
  return document.getElementById("mensagem-result").innerHTML = `<p>${mensagemResult}</p>`;
}

//DECODIFICAR

function decodificar(){
  containerResultado.style.display = 'grid';
  if (metodoCodigo = document.querySelector("#metodoCodigo").value == "cesar") {
    
    let mensagemInicio = document.querySelector('#mensagem').value;
    let solved = '';
    let nCesar = parseInt(document.querySelector("#nCesar").value);
  
    for (let i = 0; i < mensagemInicio.length; i++){
        let ascii_num = mensagemInicio[i].charCodeAt()
        let soma = ascii_num - nCesar;
        soma >= 65 && soma <= 90 ? solved += String.fromCharCode(soma) : soma < 65 ? solved += String.fromCharCode(65 - (soma % 64)) : solved += mensagemInicio[i];       
    }
    
    mensagemResult = solved;

  } else if (metodoCodigo = document.querySelector("#metodoCodigo").value == "base64"){
      
    let mensagemInicio = document.querySelector('#mensagem').value;
    let encoded = window.atob(mensagemInicio);

    mensagemResult = encoded;
  }

  return document.getElementById("mensagem-result").innerHTML = `<p>${mensagemResult}</p>`;
}

//CHAMAR FUNÇÕES

btnCodificar.addEventListener('click', codificar);
btnDecodificar.addEventListener('click', decodificar);