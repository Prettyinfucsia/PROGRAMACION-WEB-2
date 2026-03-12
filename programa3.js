function ejecutarPrograma3(){

document.getElementById("areaPrograma").innerHTML =

`<h3>Operaciones Lógicas</h3>

Valor A: <select id="valorA">

<option value="true">Verdadero</option>
<option value="false">Falso</option>
</select>

<br><br>

Valor B: <select id="valorB">

<option value="true">Verdadero</option>
<option value="false">Falso</option>
</select>

<br><br>

<button onclick="calcularLogica()">Calcular</button>

<div id="salida"></div>
`;

}

function calcularLogica(){

let A = document.getElementById("valorA").value === "true";
let B = document.getElementById("valorB").value === "true";

let AND = A && B;
let OR = A || B;
let NOTA = !A;
let NOTB = !B;

document.getElementById("salida").innerHTML =

`<h4>Resultados</h4>

A AND B = ${AND} <br>
A OR B = ${OR} <br>
NOT A = ${NOTA} <br>
NOT B = ${NOTB}`;

}
