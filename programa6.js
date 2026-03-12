function ejecutarPrograma6(){

document.getElementById("areaPrograma").innerHTML =

`<h3>Tabla de multiplicar del 7</h3>

<p>Presiona el botón para generar la tabla</p>

<button onclick="generarTabla()">Generar tabla</button>

<br><br>

<table border="1" style="border-collapse:collapse; text-align:center;">
<thead>
<tr>
<th>Operación</th>
<th>Resultado</th>
</tr>
</thead>

<tbody id="tabla7">
</tbody>

</table>
`;

}

function generarTabla(){

let numero = 7;
let i = 1;
let tabla = document.getElementById("tabla7");

tabla.innerHTML = "";

while(i <= 10){

tabla.innerHTML +=
`<tr>

<td>${numero} x ${i}</td>
<td>${numero * i}</td>
</tr>`;

i++;

}

}
