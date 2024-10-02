import ScrollSuave from "./scroll-suave.js";

const nomeInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const assuntoInput = document.querySelector('input[name="assunto"]');
const mensagemTextArea = document.querySelector('textarea[name="mensagem"]');

const botaoSubmit = document.querySelector('input[type="submit"]');
function verificarCamposPreenchidos() {
  if (nomeInput.value && emailInput.value && assuntoInput.value && mensagemTextArea.value) {
    botaoSubmit.removeAttribute('disabled'); // Habilita o botão
  } else {
    botaoSubmit.setAttribute('disabled', 'disabled'); // Desabilita o botão
  }
}


nomeInput.addEventListener('input', verificarCamposPreenchidos);
emailInput.addEventListener('input', verificarCamposPreenchidos);
assuntoInput.addEventListener('input', verificarCamposPreenchidos);
mensagemTextArea.addEventListener('input', verificarCamposPreenchidos);


verificarCamposPreenchidos();


const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();
