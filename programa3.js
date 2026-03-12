function ejecutarPrograma3(){

let numeroSecreto = Math.floor(Math.random()*10)+1;
let intento;
let intentos = 0;

do{

intento = parseInt(prompt("Adivina el número entre 1 y 10"));
intentos++;

if(intento > numeroSecreto){
alert("El número es menor");
}
else if(intento < numeroSecreto){
alert("El número es mayor");
}

}while(intento !== numeroSecreto);

alert("¡Correcto! Adivinaste el número en " + intentos + " intentos");

}
