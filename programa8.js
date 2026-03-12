let frutas = [];

function ejecutarPrograma8(){

document.getElementById("areaPrograma").innerHTML =

`<h3> Mi Tienda de Frutas</h3>

<input type="text" id="frutaInput" placeholder="Escribe una fruta">

<button onclick="agregarFruta()">Agregar fruta</button>

<hr>

<h4>Carrito de compras</h4>

<p id="contador">Total de frutas: 0</p>

<ul id="listaFrutas"></ul>
`;

}

function agregarFruta(){

let fruta = document.getElementById("frutaInput").value.trim();

if(fruta !== ""){

frutas.push(fruta);
document.getElementById("frutaInput").value="";
mostrarFrutas();

}

}

function eliminarFruta(posicion){

frutas.splice(posicion,1);
mostrarFrutas();

}

function mostrarFrutas(){

let lista = document.getElementById("listaFrutas");
lista.innerHTML = "";

let i = 0;

while(i < frutas.length){

lista.innerHTML +=
`<li>
${frutas[i]} <button onclick="eliminarFruta(${i})">eliminar</button>

</li>`;

i++;

}

document.getElementById("contador").innerHTML =
"Total de frutas: " + frutas.length;

}
