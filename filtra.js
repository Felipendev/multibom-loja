var campoFiltroNome = $("#filtrar-tabela-nome");

campoFiltroNome.addEventListener("input", function(){
	var clientes = document.querySelectorAll(".cliente");

	if (this.value.length > 0){
		for (var i = 0; i < clientes.length; i++) {
			var cliente = clientes[i];
			var tdNome = cliente.querySelector(".info-nome");
			var nome = tdNome.textContent;
			var expressao = new RegExp(this.value,"i");
			if (!expressao.test(nome)){
				cliente.classList.add("invisivel");
			}else{
				cliente.classList.remove("invisivel");
			}
		}
	}else{
		for (var i = 0;i < clientes.length; i++) {
			var cliente = clientes[i];
			cliente.classList.remove("invisivel");
		}
	}

	
})
var campoFiltroCodigo = $("#filtrar-tabela-codigo");

campoFiltroCodigo.addEventListener("input", function(){
	var codigos = document.querySelectorAll(".cliente");

	if (this.value.length > 0){
		for (var i = 0; i < codigos.length; i++) {
			var cliente = codigos[i];
			var tdCodigo = cliente.querySelector(".info-codigo");
			var codigo = tdCodigo.textContent;
			var expressao = new RegExp(this.value,"i");
			if (!expressao.test(codigo)){
				cliente.classList.add("invisivel");
			}else{
				cliente.classList.remove("invisivel");
			}
		}
	}else{
		for (var i = 0;i < codigos.length; i++) {
			var cliente = codigos[i];
			cliente.classList.remove("invisivel");
		}
	}
	
})