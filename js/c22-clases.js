function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}.`);
};

Persona.prototype.soyAlto = function () {
    return this.altura > 1.8;
};

var jose = new Persona("Jose", "Reyes", 1.76);
jose.soyAlto();
jose.saludar();
jose.soyAlto();
