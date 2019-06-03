const nsql = require('./NSql2');

class TSql extends nsql.NSql {

}

TSql.Type = class extends nsql.NSqlType {
    static fromString(str) { console.log('Convert string to TSql data type.'); }
}

module.exports.TSql = exports.TSql = TSql;
