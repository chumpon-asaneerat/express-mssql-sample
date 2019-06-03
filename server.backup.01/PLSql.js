const nsql = require('./NSql2');

class PLSql extends nsql.NSql {}

PLSql.Type = class extends nsql.NSqlType {
    //static fromString(str) { console.log('Convert string to PLSql data type.'); }
}

module.exports.PLSql = exports.PLSql = PLSql;
