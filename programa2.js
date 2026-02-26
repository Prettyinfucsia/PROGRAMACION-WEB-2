function ejecutarPrograma2() {

    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));

    let suma = num1 + num2;
    let resta = num1 - num2;
    let multiplicacion = num1 * num2;
    let division = num1 / num2;
    let modulo = num1 % num2;

    alert(
        "Resultados:\n" +
        "Suma: " + suma + "\n" +
        "Resta: " + resta + "\n" +
        "Multiplicación: " + multiplicacion + "\n" +
        "División: " + division + "\n" +
        "Módulo: " + modulo
    );
}