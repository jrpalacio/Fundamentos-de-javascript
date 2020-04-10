var jose = {
    nombre: 'Jose',
    apellido: 'Reyes Palaicio',
    altura: 1.68
};

var mateo = {
    nombre: 'Jose Mateo',
    apellido: 'Reyes Bernal',
    altura: 1.10
};

var rosa = {
    nombre: 'Rosa Jovanna',
    apellido: 'Bernal fuentes',
    altura: 1.60
};

var lupe = {
    nombre: 'Guadalupe',
    apellido: 'Reyes Palacio',
    altura: 1.30
};
const ALTURA_MAYOR = 1.5;
const esAlta = ({ altura }) => altura > ALTURA_MAYOR;
const esBaja = ({ altura }) => altura <= ALTURA_MAYOR;

var personas = [jose, mateo, rosa, lupe];
var personasAltas = personas.filter(esAlta); //filter devuelve un nuevo array
var personasBajas = personas.filter(esBaja);

console.log(personasAltas);
console.log(personasBajas);