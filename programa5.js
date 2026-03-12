function ejecutarPrograma5(){

document.getElementById("areaPrograma").innerHTML =

`<h3>Días de la semana</h3>

Ingresa un número (1-7)

<br><br>

<input type="number" id="dia">

<button onclick="mostrarDia()">Mostrar</button>

<div id="salida"></div>
`;

}

function mostrarDia(){

let d = parseInt(document.getElementById("dia").value);

let dia="";

switch(d){

case 1:
dia="Lunes";
break;

case 2:
dia="Martes";
break;

case 3:
dia="Miércoles";
break;

case 4:
dia="Jueves";
break;

case 5:
dia="Viernes";
break;

case 6:
dia="Sábado";
break;

case 7:
dia="Domingo";
break;

default:
dia="Número inválido";

}

document.getElementById("salida").innerHTML=dia;

}
