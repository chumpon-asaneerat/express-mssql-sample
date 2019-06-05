const nlib = require('./src/server/nlib/nlib.core');

const DateTime = require('./src/server/nlib/nlib.datetime').DateTime;
console.log('static today:', DateTime.today);
let dt = new DateTime();
console.log('instance today:', dt.today);

const DbConnection = require('./src/server/nlib/nlib.dbconnection');

let fn = (async () => {
    let db = new DbConnection();
    await db.connect();
    await db.query();
    await db.execute();
    await db.disconnect();
});

//fn();

const TestDb7x3 = require('./src/server/TestDb7x3');

let ex1 = (async () => {
    let db = new TestDb7x3();    
    await db.connect();
    await db.query();
    await db.execute();
    await db.disconnect();
});

ex1();

/*
// Run all in sync.
(async () => {
    await fn();
    await ex1();
})();
*/

const paths = require('./src/server/nlib/nlib.paths');
console.log('root:', paths.root);

/*
The connection config should look like this

let dbconfig = {
    datasources: [
        { 
            name: 'TestDb7x3', 
            provider: 'mssql', 
            connection: {
                server: 'localhost',
                database: 'TestDb7x3',
                username: 'sa',
                password: 'winnt@123',
                optional: {
                    timeout: 1000
                }
            },
            schema: {
                tables: {
                    lastUpdated: '2019-06-02...',
                    items: [
                        { name: 'table1', modified: '2019-06-02...' },
                        { name: 'table2', modified: '2019-06-02...' }
                    ]
                },
                procedures: {
                    lastUpdated: '2019-06-02...',
                    items: [
                        { 
                            name: 'sp1', type: 'SP', modified: '2019-06-02...', 
                            parameters: {
                                inputs: [],
                                outputs: []
                            }
                        },
                        { 
                            name: 'fn1', type: 'FN', modified: '2019-06-02...', 
                            parameters: {
                                inputs: [],
                                outputs: []
                            }
                        }
                    ]
                }
            }
        }
    ]
}

*/

