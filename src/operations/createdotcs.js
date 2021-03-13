

const fs = require('fs')


const specialSymbols = {
  openBrace: '{',
  closeBrace: '}',
  comma: ',',
  semiColon: ';',
  newLine: '\n',
}

module.exports = function (c) {
  const keys = Object.keys(c)
  
  let entity = ""

  keys.forEach((k,i) => {
    
    const {type, interfaces, props} = c[k];
    entity += createFunctions[decideElementType(type)](k)
    
    if(interfaces && interfaces.length > 0)
      entity +=   decoratorFunctions.addIntefaces(interfaces)
    
    entity += specialSymbolFunctions.addNewLine()
    entity += specialSymbolFunctions.addOpenBrace()
    entity += specialSymbolFunctions.addNewLine()

    if(props && Object.keys(props).length > 0)
      entity += createFunctions.createProperties(props)
    
    entity += specialSymbolFunctions.addCloseBrace();
    
    fs.appendFile(`./${k}.cs`, entity, function (err) {
      if (err) throw err; 
    });
    entity = ""
  })
  console.log(entity)

}

function decideElementType(type){
  console.log(type)
  switch(type){
    case 'class':
      return 'createClass'
    case 'interface':
      return 'createInterface'
  }
}

const createFunctions = {
  createClass : function (name){
    return `pubic class ${name}`
  },
  createInterface: function (name) {
    return `public interface ${name}`
  },
  createProperties: function(props) {
    let retProps = ""
    for(var prop in props)
    {
      retProps += `\tpublic ${props[prop]} ${prop} { get; set;}\n`
    }
    return retProps;
  }
}

const decoratorFunctions = {
  addIntefaces: function(interfaces){
    let iStr = " : "
    interfaces.forEach(i => {
      iStr += `${i}, `;
    })
    return(iStr.substr(0, iStr.length - 2));
  }
}

const specialSymbolFunctions = {
  addOpenBrace: function(){
    return specialSymbols.openBrace
  },
  addCloseBrace: function(){
    return specialSymbols.closeBrace
  },
  addNewLine: function() {
    return specialSymbols.newLine
  }
}
