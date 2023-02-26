const elementoChute = document.querySelector('#chute');
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();
recognition.addEventListener('result', onSpeak);

function onSpeak(event) {
    chute = event.results[0][0].transcript;
    exibiChuteNaTela(chute);
    verificaValorValido(chute);
}

function exibiChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}

function verificaValorValido() {

}