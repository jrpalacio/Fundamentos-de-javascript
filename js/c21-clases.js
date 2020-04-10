function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

Persona.prototype.saludar =  function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}.`);
};

const PROMEDIO_DE_ALTURA = 1.75;
const alto = (altura) => altura > PROMEDIO_DE_ALTURA;

Persona.prototype.soyAlto = function () {
    if(alto(this.altura)){
        console.log(`${this.nombre} eres alto`)
    } else {
        console.log(`${this.nombre} no eres alto`)
    }
}

var jose = new Persona("Jose", "Reyes", 1.76);
jose.soyAlto();