// 3. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

alert('Bem vindo ao programa de contagem regressiva!');
let contador = prompt('Qual será o número de partida da contagem regressiva?');

while (contador >= 0) {
    console.log(contador)
    contador--
}