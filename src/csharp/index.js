
const personTable = {
  id: { type: 'int', constraints: ['primary key', 'not null' ] },
  name: { type : 'string', size: 40, constraints: [ 'not null' ] },
  address: {type : 'string', size: 40, constraints: [ 'not null' ] },
  phone: {type: 'string', size: 40 },
  date: {type: 'date' }
}

function createModelClass(className, fieldsObject){
  return generateModelClass(className, createArrayOfFields(fieldsObject))
}

function createArrayOfFields(fieldsObject, accessor = 'public'){
  const fields = []
    for(const key in fieldsObject) {
        const field = fieldsObject[key]
        let property = key
        const fieldDetails = []
        property = property.replace(/(\w)(\w*)/g,
                function(g0,g1,g2){return g1.toUpperCase() + g2.toLowerCase();})
        fieldDetails.push(accessor)
        if(field.type == 'int' )
          fieldDetails.push('int')
        else if(field.type == 'string')
          fieldDetails.push('string')
        else if(field.type == 'date')
          fieldDetails.push('DateTime')
        fieldDetails.push(property)
        fields.push(fieldDetails.join(" "));          
      }
    return fields.join(';\n\t');
}


function generateModelClass(className, fields, accessor = 'public'){
  return ( 
    `
      ${accessor} class ${className} {
        ${fields}
      }
    `
  )
  
}
console.log(createModelClass('dummy', personTable))
