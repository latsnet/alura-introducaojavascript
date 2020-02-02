var pacientes = document.querySelector("#tabela-pacientes");

pacientes.addEventListener("dblclick", function(e) {
    e.target.parentNode.classList.add("fadeOut");
    setTimeout(function() {
        e.target.parentNode.remove();
    }, 500);
});
