var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente")
for (i = 0; i < pacientes.length; i++) {
    var peso = pacientes[i].querySelector(".info-peso").textContent;
    var altura = pacientes[i].querySelector(".info-altura").textContent;
    var infoimc = pacientes[i].querySelector(".info-imc");
    if (!validaPeso(peso)) {
        infoimc.textContent = "Peso inválido";
        pacientes[i].classList.add("paciente-invalido")
    } else if (!validaAltura(altura)) {
        infoimc.textContent = "Altura inválida";
        pacientes[i].classList.add("paciente-invalido")
    } else {
        infoimc.textContent = calculaImc(peso, altura);
    }
}

function calculaImc(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

/*

points = document.querySelector(".profile-activity-pointsGrid").querySelector(".pointsGrid").querySelectorAll(".pointsGrid-cell");
var totalPontos = 0;
for (i = 0; i < points.length; i++) {
   var str =  points[i].querySelector(".pointsGrid-cell-details").textContent;
   var info = str.split("\n")[3].trim().split(" ");
   if (info.length == 3) {
       console.log(parseInt(info[1]));
       totalPontos = totalPontos + parseInt(info[1]);
   }
}
console.log("Total de Pontos: " + totalPontos);

*/