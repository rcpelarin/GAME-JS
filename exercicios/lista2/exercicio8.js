// 8.Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

let numero = prompt('Digite um valor numérico positivo ou negativo: ')
if (numero == 0) {
    console.log('o número digitado é Zero')
} else {
    if (numero < 0) {
        console.log('o número digitado é Negativo')
    } else {
        console.log('o número digitado é Positivo')
    }
}