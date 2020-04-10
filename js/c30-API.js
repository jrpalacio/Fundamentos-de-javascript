const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const options = {crossDomain: true};

/*Para hacer un request utilizamos $.get();
* $.get(`${API_URL}${PEOPLE_URL.replace(':id',1)}`, { crossDomain: true});
* */
const onPeopleResponse = function (personaje) {
    console.log(`Hola, yo soy ${personaje.name}`);
};

function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(url, options, onPeopleResponse);
}

for (var i=0; i<5; i++){
    obtenerPersonaje(i);
}
