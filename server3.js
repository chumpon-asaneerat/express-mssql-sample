const tsql = require('./TSql').TSql;
const psql = require('./PLSql').PLSql;

tsql.Type.fromString('A');
psql.Type.fromString('B');

console.log('server.js finished.');