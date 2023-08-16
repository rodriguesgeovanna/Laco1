/* Criando a função menu */

function menu() {

    opcao = parseInt(prompt(
        "------ Menu Principal ------\n\n" +
        "1 - Cadastro de Cliente \n" +
        "2 - Cadastro de Colaborador \n" +
        "3 - Cadastro de Produto \n" +
        "4 - Cadastro do Sistema \n"

    ));

    switch (opcao) {
        case 1:
            cadastrar_cliente();
            break;
        case 2:
            cadastrar_colaborador();
            break;
        case 3:
            cadastrar_produto();
            break;
        default:
            alert("Finalizando o Sistema de Cadastro")
            document.getElementById("relatorio").innerHTML = "<p>Obrigado!!!</p>"
    }
};

/* Função Cadastrar Cliente */

function cadastrar_cliente() {
    let x = "n";
    relatorio = "*- Relatório de Cliente -* <br> ";

    while (x.toUpperCase() != "S") {
        id = parseInt(prompt("Digite o ID do cliente"));
        nome = prompt("Digite o nome do cliente");
        endereco = prompt("Digite o endereço do cliente");

        relatorio = relatorio + "<br>+-------------------------------------+<br><br>" +
            "ID : " + id + "<br>" +
            "NOME : " + nome + "<br>" +
            "ENDEREÇO: " + endereco +
            "<br>+--------------------------------------+<br><br>"
        confirme = prompt("Finalizar Cadastro S - para sim ou N para não?");

        if (confirme.toUpperCase() == "S") {
            x = "S";
        };

        document.getElementById("Relatório").innerHTML = "<p>" + relatorio + "</p>"
    }
}






function cadastrar_colaborador() {
    let x = "n";
    relatorio = "*- Relatório do Colaborador -* <br> ";

    while (x.toUpperCase() != "S") {
        id = parseInt(prompt("Digite o ID do colaborador"));
        nome = prompt("Digite o nome do cliente");
        endereco = prompt("Digite o endereço do colaborador");

        relatorio = relatorio + "<br>+-------------------------------------+<br><br>" +
            "ID : " + id + "<br>" +
            "NOME : " + nome + "<br>" +
            "ENDEREÇO: " + endereco +
            "<br>+--------------------------------------+<br><br>"
        confirme = prompt("Finalizar Cadastro S - para sim ou N para não?");

        if (confirme.toUpperCase == "S") {
            x = "S";
        };

        document.getElementById("Relatório").innerHTML = "<p>" + relatorio + "</p>"
    }
}