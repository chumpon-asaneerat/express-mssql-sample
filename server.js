const tsql = require('./TSql').TSql;
const psql = require('./PLSql').PLSql;

//console.log(tsql.Type);
//console.log(psql.Type);
tsql.Type.fromString('A');
psql.Type.fromString('B');

console.log('server.js finished.');