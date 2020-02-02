var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");
    filtro = this.value;

    pacientes.forEach(function (paciente) {
        nome = paciente.querySelector(".info-nome").textContent;
        var expressao = new RegExp(filtro, "i");
        if (filtro.length > 0 && !expressao.test(nome)) {
            paciente.classList.add("invisivel");
        } else {
            paciente.classList.remove("invisivel");
        }
    });
});