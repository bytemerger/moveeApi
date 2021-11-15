const fetch = require('node-fetch');
const { models } = require('../models/index')

async function getMoviesList(){
    const response = await fetch('https://swapi.dev/api/films/');
    const data = (await response.json()).results;
    data.sort(function(a,b){
        return new Date(a.release_date) - new Date(b.release_date);
        });
    let ndata = await Promise.all(data.map(async element => {
        let commentCount = await models.comment.count({
            where: {
              movieId: element.episode_id
            }
          });
          element['comment'] = commentCount
        return (({ title, episode_id, opening_crawl, release_date, comment}) => ({ title, episode_id, opening_crawl, release_date, comment}))(element)
    }));
    return ndata
}
module.exports = {
    getMoviesList
}