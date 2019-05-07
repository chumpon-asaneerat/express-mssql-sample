const nsql = require("./NMSSql");
const mssqlserver = new nsql.NMSSqlServer();
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


console.log('server.js finished.');
