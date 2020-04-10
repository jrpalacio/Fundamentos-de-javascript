const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const options = {crossDomain: true};

/*Para hacer un request utilizamos $.get();
* $.get(`${API_URL}${PEOPLE_URL.replace(':id',1)}`, { crossDomain: true});
* */

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

    $.get(url, options, function (personaje) {
        console.log(`Hola, yo soy ${personaje.name}`);
        if (callback){
            callback();
        }
    });
}

obtenerPersonaje(1, function () {
    obtenerPersonaje(2, function () {
        obtenerPersonaje(3, function () {
            obtenerPersonaje(4);
        });
    });
});
