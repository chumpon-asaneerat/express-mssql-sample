const mssql = require('mssql');

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
    // do some adhoc query.
    let params = [ 
        { name:'param1', sqltype: mssql.Int },
        { name:'param2', sqltype: mssql.Int } 
    ];
    let val = { param1: 123, param2: 456 };
    let ret = await dbconn.adhoc('select @param1 as value; select @param2 as value2', val, params);
    //console.log('ret:', ret.data);
    console.log('recordsets:', ret.data.recordsets);
    console.log('recordset:', ret.data.recordset);
    console.log('output:', ret.data.output);
    console.log('rowAffected:', ret.data.rowAffected);
    console.log('returnValue:', ret.data.returnValue);
    // disconnect it.
    await dbconn.disconnect();
})();

console.log('server.js finished.');
