const mssql = require('./nlib/nlib.mssql');

/** The TestDb7x3 (MSSQL Server) database connection wrapper class. */
class TestDb7x3 extends mssql {
    /** Create new instance of TestDb7x3 database connection. */
    constructor() {
        super();
    }
    /** Get Config Full File Name. (json object). */
    getConfigFileName() {
        return '';
    }
    
    //? =========================================================
    //? override methods - for supports JSDoc and intellisense.
    //? =========================================================
    /** Checks is database conncted. */
    get isConnected() { return super.isConnected; }
    /** Connect to database. */
    async connect() { super.connect(); }
    /**
     * Execute Query.
     * @param {Object} opts The query options.
     */
    async query(opts) { super.query(opts); }
    /**
     * Execute stored procedure.
     * @param {Object} opts The stored procedure options.
     */
    async execute(opts) { super.execute(opts); }
    /** Disconnect from database. */
    async disconnect() { super.disconnect(); }
}

/** The TestDb7x3 (MSSQL Server) database connection wrapper class. */
module.exports = exports = TestDb7x3;
