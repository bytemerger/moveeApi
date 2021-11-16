const createError = require('http-errors');
const Validator = require('validatorjs');
const errorHandler = require('../../config/error');
const { getCharacters } = require('../services/characterService');
const {validateRequestQuery} = require('../helpers/index');

async function getAllCharacters(req, res, next) {
    // validate that the request parameters dont have extra params
    const allowedReqParams = ['sort','order','filter']
    try {
        let valid = validateRequestQuery(req,allowedReqParams);
    } catch (error) {
        console.log(error)
        next(error)
    }
    const {sort, order, filter} = req.query
    let validation = new Validator({sort,order,filter}, {
        sort: 'in:name,height,gender',
        order: 'in:desc,asc',
        filter: 'in:male,female'
    });
    if(validation.fails()){
        let error = createError(400, { message: validation.errors.all() })
        next(error)
    }
    try {
        let ndata = await getCharacters(sort,order,filter);
        return res.status(200).json(ndata);
    } catch (error) {
        error = createError(error);
        next(error);
    }
}

module.exports = {
    getAllCharacters,
}