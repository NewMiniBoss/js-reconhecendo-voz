function verificaValorValido(chute) {
    const numero = +chute;

    if (Number.isNaN(numero)) {
        elementoChute.innerHTML += `
            <div>Não é um numero</div>
        `
        return
    }

    if (numero > maiorValor || numero < menorValor) {
        elementoChute.innerHTML += `
            <div>Valor invalido, precisa estar entre ${valorMenor} e ${maiorValor}</div>
        `
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acerto o número secreto!</h2>
        <h3>O número secreto é: ${numero}</h3>
        <button id="newGame" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    }
}

document.body.addEventListener('click', (evento) => {
    if (evento.target.id == 'newGame') {
        window.location.reload();
    }
})