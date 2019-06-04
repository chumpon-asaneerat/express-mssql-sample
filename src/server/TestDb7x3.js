const mssql = require('./nlib/nlib.mssql');

/**
 * The TestDb7x3 (MSSQL Server) database wrapper class.
 */
class TestDb7x3 extends mssql.NSqlServer {
    constructor() {
        super();
    }
    /**
     * Get Config Full File Name. (json object).
     */
    getConfigFileName() {
        return '';
    }
}

module.exports.TestDb7x3 = exports.TestDb7x3 = TestDb7x3;
