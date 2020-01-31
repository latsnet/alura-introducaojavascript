var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente")
for (i = 0; i < pacientes.length; i++) {
    var peso = pacientes[i].querySelector(".info-peso").textContent;
    var altura = pacientes[i].querySelector(".info-altura").textContent;
    var imc = peso / (altura * altura);
    pacientes[i].querySelector(".info-imc").textContent = imc;
}


/*

points = document.querySelector(".pointsGrid").querySelectorAll(".pointsGrid-cell");
var totalPontos = 0;
for (i = 0; i < points.length; i++) {
   var str =  points[i].querySelector(".pointsGrid-cell-details").textContent;
   var info = str.split("\n")[3].trim().split(" ");
   if (info.length == 3) {
       console.log(parseInt(info[1]));
       totalPontos = totalPontos + parseInt(info[1]);
   }
}
console.log(totalPontos);

*/