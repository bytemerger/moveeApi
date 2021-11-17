const fetch = require('node-fetch');
const createError = require('http-errors');

function validateRequestQuery(req, allowedParams){
    let reqParams = Object.keys(req.query);
    let notAllowed = reqParams.filter(x => !allowedParams.includes(x));
    if(notAllowed.length > 0){
        let error = {};
        for(let i=0;i<notAllowed.length;i++) {

            error[notAllowed[i]] = `The value ${notAllowed[i]} is not a required request parameter`
        }
        throw createError(400, { message: error });
    }
    return true
}
async function fetchLoop(url){
    let data
    let fetchApi = await fetch(url);
    let response = await fetchApi.json();
    data = response.results;
    while(response.next != null){
        fetchApi = await fetch(response.next);
        response = await fetchApi.json();
        data.push(...response.results);
    }
    return data;
}
module.exports = {
    validateRequestQuery,
    fetchLoop
}