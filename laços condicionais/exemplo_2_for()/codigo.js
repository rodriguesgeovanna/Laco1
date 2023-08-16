/* Imprimir de 1 a 20 e quando chegar no 11 aparecer a mensagem o valor atual é 11 */

let valor = '';
for(let i = 1; i<= 20;i++) {
    valor += "Valor de i = " + i + "<br>"
    if(i == 11) {
        resposta.innerHTML =valor + "Chegou no 11";
        /* O break sai fora do laço */
        break;
    }
    resposta.innerHTML = valor;
}


