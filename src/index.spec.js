// postgres test 
const gen = require('./index.js')

const personTable = {
    id: { type: 'serial', constraints: ['primary key', 'not null' ] },
    name: { type : 'VARCHAR', size: 40, constraints: [ 'not null' ] },
    address: {type : 'VARCHAR', size: 40, constraints: [ 'not null' ] },
    phone: {type: 'VARCHAR', size: 40 },
    date: {type: 'TIMESTAMP' }
}

describe('Create Query', () => {
    it('should return correct create query', () => {
        expectedQuery = 'CREATE TABLE person ( id serial PRIMARY KEY NOT NULL,name VARCHAR 40 NOT NULL,address VARCHAR 40 NOT NULL,phone VARCHAR 40,date TIMESTAMP );'
        console.log(gen)
        const query = gen.create('person', personTable )
        expect(query).toBe(expectedQuery)        
    })
})