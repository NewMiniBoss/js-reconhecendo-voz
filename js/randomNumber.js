const menorValor = 0;
const maiorValor = 100;
const numeroSecreto = geradorNumeroSecreto();

function geradorNumeroSecreto() {
    return parseInt(Math.random() * maiorValor + 1);
}

console.log(`o numero secreto é: ${numeroSecreto}`);

const elementMaior = document.querySelector('#maior-valor');
elementMaior.innerHTML = maiorValor;
const elementMenor = document.querySelector('#menor-valor');
elementMenor.innerHTML = menorValor;
