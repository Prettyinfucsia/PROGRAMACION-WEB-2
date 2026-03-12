function ejecutarPrograma2(){

document.getElementById("areaPrograma").innerHTML =

`<h3>Operaciones matemáticas</h3>

Número 1: <input type="number" id="num1"><br><br>

Número 2: <input type="number" id="num2"><br><br>

<button onclick="calcular()">Calcular</button>

<div id="salida"></div>
`;

}

function calcular(){

let num1=parseFloat(document.getElementById("num1").value);
let num2=parseFloat(document.getElementById("num2").value);

let suma=num1+num2;
let resta=num1-num2;
let multiplicacion=num1*num2;
let division=num1/num2;
let modulo=num1%num2;

document.getElementById("salida").innerHTML=

`<h4>Resultados</h4>

Suma: ${suma}<br>
Resta: ${resta}<br>
Multiplicación: ${multiplicacion}<br>
División: ${division}<br>
Módulo: ${modulo}`;
}
