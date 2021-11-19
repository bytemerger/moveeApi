const { fetchLoop } = require('../app/helpers/index');
const {setAsync} = require('../config/db');

async function getData(){
    const characters = await fetchLoop('https://swapi.dev/api/people/');
    await setAsync('characters',JSON.stringify(characters));

    const movies = await fetchLoop('https://swapi.dev/api/films/');
    await setAsync('movies',JSON.stringify(movies));

    console.log("{success}")
}
module.exports = getData