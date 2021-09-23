var clientes = document.querySelectorAll(".cliente");
var tdeditar = document.querySelectorAll(".editar");
var tabela = document.querySelectorAll("table");

tabela.forEach(function(editar) {
    editar.addEventListener("dblclick", function(event) {
        event.target.parentNode.classList.add("fadeOut");

        setTimeout(function() {
            event.target.parentNode.remove();
        }, 500)
    })
})