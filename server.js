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
    let connObj = await dbconn.connect(opts);
    if (connObj) {
        console.log('success get connect result object.');
        if (dbconn === connObj) {
            console.log('same connection pool instance.');
        }
        else console.log('difference connection pool instance.');
    }
    await dbconn.disconnect();
})();

console.log('server.js finished.');
