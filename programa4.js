function ejecutarPrograma4(){

document.getElementById("areaPrograma").innerHTML =

`<h3>Comparación de dos números</h3>

Número 1: <input type="number" id="num1"><br><br>

Número 2: <input type="number" id="num2"><br><br>

<button onclick="comparar()">Comparar</button>

<div id="salida"></div>
`;

}

function comparar(){

let n1 = parseFloat(document.getElementById("num1").value);
let n2 = parseFloat(document.getElementById("num2").value);

let resultado="";

if(n1>n2){
resultado="El número 1 es mayor que el número 2";
}
else if(n1<n2){
resultado="El número 2 es mayor que el número 1";
}
else{
resultado="Los dos números son iguales";
}

document.getElementById("salida").innerHTML=resultado;

}
