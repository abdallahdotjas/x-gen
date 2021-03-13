// postgres test 
const gen = require('./index.js')

const personTable = {
    id: { type: 'int', constraints: ['primary key', 'not null' ] },
    name: { type : 'string', size: 40, constraints: [ 'not null' ] },
    address: {type : 'string', size: 40, constraints: [ 'not null' ] },
    phone: {type: 'string', size: 40 },
    date: {type: 'date' }
}

describe('Create Query', () => {
    it('should return correct create query', () => {
        expectedQuery = 'CREATE TABLE person ( id int PRIMARY KEY NOT NULL,name VARCHAR 40 NOT NULL,address VARCHAR 40 NOT NULL,phone VARCHAR 40,date date );'
        const query = gen.create('person', personTable )
        expect(query).toBe(expectedQuery)      
    })

})

const classPerson = JSON.stringify({
    "person": {
      "type": "class",
      "interfaces": ["iperson","ihuman"],
      "props": {
        "name":  "string" ,
        "phone": "string", 
        "age": "int",
        "gender": "char"
      }
    },
    "person2": {
        "type": "class",
        "interfaces": ["iperson","ihuman"],
        "props": {
          "name":  "string" ,
          "phone": "string", 
          "age": "int",
          "gender": "char"
        }
      }
  });

  describe('Create Query', () => {
    it('should return correct create query', () => {
        const query = gen.createdotcs(JSON.parse(classPerson))
        console.log(query);
    })

})


