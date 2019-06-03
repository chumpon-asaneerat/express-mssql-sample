// sample to call sp.
const mssql = require('mssql');
const nmssql = require('./NMSSql.js').NMSSql;
const db7x3 = require('./NMSSql.js').TextDb7x3;

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
}

let conn = new nmssql();
let sp_opts = {
    name: 'GetCustomers',
    inputs: [
        { name:'langId', type: "nvarchar(3)", value: 'TH' },
        { name:'customerId', type: "nvarChar(30)", value: 'EDL-C2018080002' },
        { name:'enabled', type: "bit", value: true }
    ],
    outputs: []
}

let query_opts = {
    text: 'select @param as value',
    inputs: [
        { name:'param', type: "int" }
    ],
    outputs: [],
    value: {
        "param": 12345
    }
}

let callsp = async () => {
    await conn.connect(opts);
    let result = await conn.exec(sp_opts);
    await conn.disconnect();
    return result;
}

let callQry = async () => {
    await conn.connect(opts);
    let result = await conn.query(query_opts);
    await conn.disconnect();
    return result;
}

let result;
(async () => {
    //result = await callsp();
    result = await callQry();
    console.log('Result:', result);
})();

// mixin 1: figure out how to access main class instance data.

// mixin 2: figure out how to set individual object with same class but difference
// functional due to append difference mixin functions.

// mixin 3: figure out how to access class static method.

// database classes:
// 1. abstract classes :
//    - dbaccess class (should inherited for each provider)
//    - dbtypes class (should inherited for each provider)
//      for example :
//      dbtypes { } // no implements in base class (may be not need this class)
//      sqltypes extends dbtypes {
//          static get char(size = 50) { return new sqltype(`char('${size}')`) }
//          static get nchar(size = 50) { return new sqltype(`nchar('${size}')`) }
//          static get int() { return new sqltype(`int`) }
//      }
//
//      - dbtype (should inherited for each provider)
//      for example :
//      dbtype { } // no implements in base class (may be not need this class)
//      sqltype extends dbtype {
//          constructor(str) {
//              this._type = ... [keep type in string lower case]
//              this._p1 = ... [keep first param: size, length, precision]
//              this._p2 = ... [keep second param: scale]
//          }
//      }
