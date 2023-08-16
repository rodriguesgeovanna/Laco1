/* FOR([inicialização];[condição1];[expressão final]){
declaração

TIPOS DE VARIÁVEIS

VAR = GLOBAL
LET = LOCAL
CONST = CONSTANTE
} */

let valor = ''
let valor2 = parseInt(prompt("Digite o valor"));
for (let i = 1; i <=10; i++) { 
    valor += i + "X" + valor2 + "=" + i * valor2 + "<br>"
    resposta.innerHTML = valor;
}
