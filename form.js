var $ = document.querySelector.bind(document);
var botaoAdicionar = $("#adicionar-cliente");
botaoAdicionar.addEventListener("click", function(event) {

    event.preventDefault();

    var form = $("#form-adiciona");
    var cliente = obtemClienteDoFormulario(form);

    var erros = validaCliente(cliente);
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaClienteNaTabela(cliente);
    form.reset();

    var mensagensDeErro = $("#mensagens-erro");
    mensagensDeErro.innerHTML = "";
})

function exibeMensagensDeErro(erros) {
    var ul = $("#mensagens-erro")
    ul.innerHTML = "";
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemClienteDoFormulario(form) {
    var cliente = {
        nome: form.nome.value,
        codigo: form.codigo.value,
        contato: form.contato.value,
        dataChegada: form.dataChegada.value
    }
    return cliente;
}

function montaTr(cliente) {
    var clienteTr = document.createElement("tr");
    clienteTr.classList.add("cliente")

    clienteTr.appendChild(montaTd(cliente.nome, "info-nome"));
    clienteTr.appendChild(montaTd(cliente.codigo, "info-codigo"));
    clienteTr.appendChild(montaTd(cliente.contato, "info-contato"));
    clienteTr.appendChild(montaTd(cliente.dataChegada, "info-data-chegada"));
    clienteTr.appendChild(montaTd(cliente.dataEntrega, "info-data-entrega"));

    return clienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe)

    return td;
}

function validaCliente(cliente) {

    var erros = [];

    if (cliente.nome.length == 0) {
        erros.push("O nome não pode ficar em branco");
    }
    if (cliente.codigo.length == 0) {
        erros.push("O código não pode ficar em branco");
    }
    if (cliente.contato.length == 0) {
        erros.push("O contato não pode ficar em branco");
    }
    if (cliente.dataChegada.length == 0) {
        erros.push("A data de Chegada não pode ficar em branco");
    }
    return erros;
}

function adicionaClienteNaTabela(cliente) {
    var clienteTr = montaTr(cliente);
    var tabela = $("#tabela-cliente");
    tabela.appendChild(clienteTr);
}