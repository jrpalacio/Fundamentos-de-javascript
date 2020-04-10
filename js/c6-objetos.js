var jose = {
    nombre: 'José',
    apellido: 'Reyes',
    edad: 30
};

var mateo = {
    nombre: 'José Mateo',
    apellido: 'Reyes',
    edad: 4
};

function imprimirNombreEnMayusculas({nombre}) {
    console.log(nombre.toUpperCase());
};

//imprimirNombreEnMayusculas(jose);
//imprimirNombreEnMayusculas(mateo);

function imprimirNombreYEdad(persona) {
    var {nombre} = persona;
    var {edad} = persona;
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
}

//imprimirNombreYEdad(jose);
//imprimirNombreYEdad(mateo);

function cumpleanos(persona) {
    var otraPersona = {
        ...persona,
        edad: persona.edad + 1
    };
    return otraPersona;
}

var perro = {
    nombre: "Pique"
};

var otroPerro = {
    ...perro
};

// Estructuras de control
var pepe = {
    nombre: "José",
    apellido: "Reyes",
    edad: 30,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre}:`);
    if (persona.ingeniero) {
        console.log("Es Ingeniero");
    } else {
        console.log("No es Ingeniero");
    }

    if (persona.cocinero) {
        console.log("Es Cocinero")
    } else {
        console.log("No es Cocinero")
    }
}

//imprimirProfesiones(pepe);

const MAYORIA_DE_EDAD = 18;

/*
function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD;
}

const esMayorDeEdad = function (persona) {
    return persona.edad >= MAYORIA_DE_EDAD;
}

const esMayorDeEdad = persona => {
    return persona.edad >= MAYORIA_DE_EDAD;
}


const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD;
 */
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;
const esMenorDeEdad = ({ edad }) => edad < MAYORIA_DE_EDAD;

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

function permitirAcceso(persona) {
    if (!esMayorDeEdad(persona)){
        console.log("Acceso denegado")
    }
}
//imprimirSiEsMayorDeEdad(jose);
//imprimirSiEsMayorDeEdad(mateo);

//permitirAcceso(jose);
//permitirAcceso(mateo);

var rosa = {
    nombre: "Jovanna",
    apellido: "Bernal",
    edad: 29,
    peso: 75
}

console.log(`Al inicio del año ${rosa.nombre} pesa ${rosa.peso} kg`);
const INCREMENTAR_PESO = 0.2;
const DIAS_DEL_ANO = 365;

const aumentarDePeso = persona => persona.peso+=INCREMENTAR_PESO;
const adelgazar = persona => persona.peso-=INCREMENTAR_PESO;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

/*
for (var i = 1; i<= DIAS_DEL_ANO ; i++){
    var random = Math.random();
    if(random < 0.25){
        aumentarDePeso(rosa);
    }else if (random < 0.5){
        adelgazar(rosa)
    }
}

 */
const META = rosa.peso -3;
var dias = 0;

while (rosa.peso > META){
    //debugger
    if (comeMucho()){
        aumentarDePeso(rosa);
    }
    if (realizaDeporte()){
        adelgazar(rosa);
    }
    dias +=1;
}

console.log(`Pasaron ${dias} dias hasta que ${rosa.nombre} adelgazó 3 kg`);
console.log(`Al final del año ${rosa.nombre} pesa ${rosa.peso.toFixed(1)} kg`);
