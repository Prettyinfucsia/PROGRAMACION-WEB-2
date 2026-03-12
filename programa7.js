let numeroSecreto = Math.floor(Math.random()*10)+1;
let intentos = 0;

function ejecutarPrograma7(){

document.getElementById("areaPrograma").innerHTML =

`<h3>Adivina el número (1-10)</h3>

<input type="number" id="intento">

<button onclick="adivinar()">Intentar</button>

<div id="salida"></div>
`;

}

function adivinar(){

let intento=parseInt(document.getElementById("intento").value);

intentos++;

if(intento > numeroSecreto){

document.getElementById("salida").innerHTML="El número es menor";

}

else if(intento < numeroSecreto){

document.getElementById("salida").innerHTML="El número es mayor";

}

else{

document.getElementById("salida").innerHTML=
`¡Correcto! Lo lograste en ${intentos} intentos`;

}

}