// sample to call sp.
let nmssql = require('./NMSSql.js');

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
conn.connect(opts);

conn.disconnect();


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
