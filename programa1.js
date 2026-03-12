function ejecutarPrograma1(){

document.getElementById("areaPrograma").innerHTML =

`<h3>Registro de datos</h3>

Nombre: <input type="text" id="nombre"><br><br>

Edad: <input type="number" id="edad"><br><br>

Carrera: <input type="text" id="carrera"><br><br>

Correo: <input type="email" id="correo"><br><br>

<button onclick="mostrarDatos()">Guardar</button>

<div id="salida"></div>
`;

}

function mostrarDatos(){

let nombre=document.getElementById("nombre").value;
let edad=document.getElementById("edad").value;
let carrera=document.getElementById("carrera").value;
let correo=document.getElementById("correo").value;

document.getElementById("salida").innerHTML=

`<h4>Datos ingresados</h4>

Nombre: ${nombre} <br>
Edad: ${edad} <br>
Carrera: ${carrera} <br>
Correo: ${correo}`;

}