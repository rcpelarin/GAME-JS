alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let chute = 0, tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');
    if (chute == numeroSecreto) {
        break;        
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é MENOR que ${chute}`);
        } else {
            alert(`O número secreto é MAIOR que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'

alert(`PARABÉNS!!! VOCÊ ACERTOU em ${tentativas} ${palavraTentativa}!\n O número secreto é ${numeroSecreto}.`);