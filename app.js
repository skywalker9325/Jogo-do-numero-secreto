let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativa = 1

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
};

function exibirMensagemInicial() {
    exibirTexto('h1', 'Número Secreto');
    exibirTexto('p', `Escolha um número entre 1 e ${numeroLimite}`);   
};

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroAleatorio) {
        exibirTexto ('h1', 'Acertou');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativa} ${palavraTentativa}!`
        exibirTexto ('p', mensagemTentativa );
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroAleatorio) {
            exibirTexto ('p', 'O número secreto é menor');
        } else {
            exibirTexto ('p', 'O número secreto é maior');
        }
        tentativa++
        limparCampo()
    }
};

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    console.log(numeroEscolhido);
    let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeNumerosNaLista == 10) {
        listaDeNumerosSorteados = [];
    };


    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    };
};

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';    
}

function newGame() {
    numeroAleatorio = gerarNumeroAleatorio();
    exibirMensagemInicial();
    tentativa = 1;
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
};