
// get database config from config.json

// pass method and object to the function 
// 
const dbConfig = require('./config.json')

const create = require('./operations/create')
const createdotcs = require('./operations/createdotcs')

module.exports = {
    create,
    createdotcs
}