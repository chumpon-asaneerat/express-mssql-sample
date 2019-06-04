const nlib = require('./src/server/nlib/nlib.core');
const DateTime = nlib.NDateTime;
const DbConnection = nlib.NDbConnection;

console.log('static today:', DateTime.today);

let dt = new DateTime();
console.log('instance today:', dt.today);

let fn = (async () => {
    let db = new DbConnection();
    await db.connect();
    await db.query();
    await db.execute();
    await db.disconnect();
});

//fn();

const TestDb7x3 = require('./src/server/TestDb7x3').TestDb7x3;

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