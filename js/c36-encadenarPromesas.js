const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const options = {crossDomain: true};

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        $
            .get(url, options, function (data) {
                resolve(data)
            })
            .fail(() => reject(id))
    })
}

function onError(id) {
    console.log(`Sucedio un error. No se puedo obtener el personaje ${id}`);
}

obtenerPersonaje(1)
    .then((personaje) => {
        console.log(`Hola, yo soy ${personaje.name}`);
        return obtenerPersonaje(2);
    })
    .then((personaje) => {
        console.log(`Hola, yo soy ${personaje.name}`);
        return obtenerPersonaje(3);
    })
    .then((personaje) => {
        console.log(`Hola, yo soy ${personaje.name}`);
        return obtenerPersonaje(4);
    })
    .then((personaje) => {
        console.log(`Hola, yo soy ${personaje.name}`);
        return obtenerPersonaje(5);
    })
    .then((personaje) => {
        console.log(`Hola, yo soy ${personaje.name}`);
        return obtenerPersonaje(6);
    })
    .then((personaje) => {
        console.log(`Hola, yo soy ${personaje.name}`);
        return obtenerPersonaje(7);
    })
    .then((personaje) => {
        console.log(`Hola, yo soy ${personaje.name}`);
    })
    .catch(onError);


