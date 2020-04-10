var jose = {
    nombre: 'Jose',
    apellido: 'Reyes Palaicio',
    altura: 1.68
}

var mateo = {
    nombre: 'Jose Mateo',
    apellido: 'Reyes Bernal',
    altura: 1.10
}

var rosa = {
    nombre: 'Rosa Jovanna',
    apellido: 'Bernal fuentes',
    altura: 1.60
}

var lupe = {
    nombre: 'Guadalupe',
    apellido: 'Reyes Palacio',
    altura: 1.30
}

var personas = [jose, mateo, rosa, lupe];

for (var i=0; i<personas.length ; i++){
    var persona = personas[i];
    console.log(`${persona.nombre} mide ${persona.altura} m.`)
}