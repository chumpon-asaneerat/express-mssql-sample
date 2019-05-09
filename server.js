const nsql = require("./NMSSql");
const sqlserver = nsql.NMSSqlServer;
const tsql = nsql.TSql;

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
    let dbconn = new sqlserver();
    await dbconn.connect(opts);
    // do some adhoc query.
    let params = [ 
        { name:'param1', type: tsql.int },
        { name:'param2', type: tsql.int } 
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

console.log(tsql.toType('ntext'))
console.log(tsql.toType('nvarchar(50)'))
console.log(tsql.toType('decimal(18, 2)'))
console.log('decimal(18, 2)'.getSqlDataType()); // use string prototype.

console.log('server.js finished.');
