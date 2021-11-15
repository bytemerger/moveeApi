const fetch = require('node-fetch');

async function getMoviesList(){
    const response = await fetch('https://swapi.dev/api/films/');
    const data = (await response.json()).results;
    data.sort(function(a,b){
        return new Date(a.release_date) - new Date(b.release_date);
        });
    let ndata = data.map(element => {
        return (({ title, opening_crawl, release_date}) => ({ title, opening_crawl, release_date}))(element)
    });
    return ndata
}
module.exports = {
    getMoviesList
}