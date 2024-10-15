alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entra 1 e 10');
    if (chute == numeroSecreto) {
        alert(`PARABÉNS!!! VOCÊ ACERTOU em ${tentativas} tentativas!\n O número secreto é ${numeroSecreto}`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é MENOR que ${chute}`);
        } else {
            alert(`O número secreto é MAIOR que ${chute}`);
        }
        tentativas++;
    }
}