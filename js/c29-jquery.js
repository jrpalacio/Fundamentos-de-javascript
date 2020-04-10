const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

/*Para hacer un request utilizamos $.get();
* $.get(`${API_URL}${PEOPLE_URL.replace(':id',1)}`, { crossDomain: true});
* */
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`;
const options = {crossDomain: true};
const onPeopleResponse = function (persona){
    console.log(`Hola yo soy ${persona.name}`);
};

$.get(lukeUrl, options, onPeopleResponse);
