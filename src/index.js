
// get database config from config.json

// pass method and object to the function 
// 
const dbConfig = require('./config.json')

function create(tableName, columnsObject) {
    return generateCreateTableStatement( tableName, createArrayOfColumns(columnsObject));
}

function createArrayOfColumns(columnsObject) {
    const columns = []
    for(const key in columnsObject) {
        const column = columnsObject[key]
        const columnDetails = []
        columnDetails.push(key.toLowerCase())
        column.type == 'string' 
            ? columnDetails.push(`VARCHAR ${(column.size)}`)
            : columnDetails.push(`${ column.type }`)
        if(column.constraints && column.constraints.length)
            column.constraints.forEach(item => columnDetails.push(`${ item.toUpperCase() }`))
        columns.push(columnDetails.join(" "));
    }
    return columns
}

function generateCreateTableStatement(tableName,columns){
    return(`CREATE TABLE ${tableName} ( ${columns.toString()} );`)
}

module.exports = {
    create
}