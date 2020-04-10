class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar(fn) {
        var { nombre, apellido } = this;
        console.log(`Hola, me llamo ${nombre} ${apellido}.`);
        if (fn) {
            fn(nombre, apellido);
        }
    }

    soyAlto() {
        return this.altura > 1.8;
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura);
    }

    saludar(fn) {
        var { nombre, apellido } = this;
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy Desarrollador.`);
        if (fn){
            fn(nombre, apellido, true);
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`);
    if (esDev){
        console.log(`Ah mira, no sabía que eras desarrollador.`)
    }
}

const jose = new Persona('Jose', 'Reyes', 1.70);
const rosa = new Persona('Rosa', 'Bernal', 1.50)
const  mateo = new Desarrollador('Mateo', 'Reyes', 1.80);

jose.saludar(responderSaludo);
rosa.saludar();
mateo.saludar(responderSaludo);