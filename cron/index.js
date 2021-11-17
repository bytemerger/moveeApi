const redis = require('redis');
const promisify = require('util').promisify;
const { fetchLoop } = require('../app/helpers/index');

const client = redis.createClient();
const setAsync = promisify(client.set).bind(client);

async function getData(){
    const characters = await fetchLoop('https://swapi.dev/api/people/');
    await setAsync('characters',JSON.stringify(characters));

    const movies = await fetchLoop('https://swapi.dev/api/films/');
    await setAsync('movies',JSON.stringify(movies));

    console.log("{success}")
}
module.exports = getData