var pacientes = document.querySelector("#tabela-pacientes");

pacientes.addEventListener("dblclick", function(e) {
    e.target.parentNode.remove();
});
