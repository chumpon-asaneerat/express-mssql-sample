const nsql = require("./NMSSql");
const opts = {
    server: 'localhost',
    database: 'TestDb7x3',
    user: 'sa',
    password: 'winnt123',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
};

console.log('server.js running...');

(async() => {
    let dbconn = new nsql.NMSSqlServer();
    await dbconn.connect(opts);
    // do some request to database.
    let req = dbconn.request();
    if (req) {
        console.log('request created.');
    }
    // disconnect it.
    await dbconn.disconnect();
})();

console.log('server.js finished.');
