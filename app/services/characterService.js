const fetch = require('node-fetch');
const { getAsync }  = require('../../config/db');
async function getCharacters(sort = false, order = false, filter = false){
    let data = JSON.parse(await getAsync('characters'));
    if(filter){
        data = data.filter((character)=>{
            return character.gender === filter
        })
    }
    switch(sort) {
        case 'name':
            if(order === 'asc'){
                data.sort(function(a,b){
                   return a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1                 
                });
            }else{
                data.sort(function(a,b){
                    return a.name.toUpperCase() > b.name.toUpperCase() ? -1 : 1                 
                });
            }
          break;
        case 'height':
            if(order === 'asc'){
                data.sort(function(a,b){
                    return a.height - b.height;                 
                });
            }else{
                data.sort(function(a,b){
                    return b.height - a.height;                
                });
            }
          break;
        case 'gender':
            if(order === 'asc'){
                data.sort(function(a,b){
                    return (a.gender.toUpperCase() > b.gender.toUpperCase()) ? 1 : -1;
                });
            }else{
                data.sort(function(a,b){
                    return (a.gender.toUpperCase() > b.gender.toUpperCase()) ? -1 : 1;
                });
            }
          break;
        default:
          // code block
      }

    //get the array length
    let length = data.length;
    let {height} = data.reduce((previous, current)=>{
        return {height: parseInt(previous.height) + (isNaN(current.height) ? 0 : parseInt(current.height))};
    });
    const totalHeightFeet = height * 0.0328084;
    const totalHeightInches = height * 0.393701;
    let meta_data = {
        total : length,
        totalHeightcm: height,
        totalHeightFeet: totalHeightFeet,
        totalHeightInches: totalHeightInches,
    }

    return { data, meta_data };
}
module.exports = {
    getCharacters
}