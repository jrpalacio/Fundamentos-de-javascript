var nombre= "Jose", apaterno = "Reyes";

var nombreEnMayuscula = nombre.toUpperCase();
var nombreEnMinuscula = nombre.toLowerCase();

var primeraLetraDelNombre = nombre.charAt(0);
var cantidadDeLetrarDelNombre = nombre.length;
//var nombreCompleto = nombre + " " + apaterno;
var nombreCompleto = `${nombre} ${apaterno.toLowerCase()}`;

cantidadDeLetras = nombre.length;
ultimaLetraDelNombre = nombre.charAt(cantidadDeLetras-1);

var precioDeVino = 200.3;
var total = Math.round(precioDeVino * 100 * 3)/100;

var totalStr = total.toFixed(2);
var total2 = parseFloat(totalStr);

var edad = 30;

function imprimirEdad(name, age) {
    console.log(`${name} tiene ${age} años.`);
}

imprimirEdad(nombre, edad);
imprimirEdad('José Mateo', 4);
imprimirEdad("Boss", 2);