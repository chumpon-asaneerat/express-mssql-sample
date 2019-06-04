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

fn();
