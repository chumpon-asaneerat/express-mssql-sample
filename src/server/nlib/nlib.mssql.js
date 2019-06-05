const mssql = require('mssql');
const DbConnection = require('./nlib.dbconnection');

/** The Microsoft SQL Server database connection base class. */
class SqlServer extends DbConnection { 
    /** Create new instance of NDbConnection. */
    constructor() {
        super();
        this._conn = null;
    }
    /** Get Config Full File Name. (json object). */
    getConfigFileName() { return ''; }

    /** Checks is database conncted. */
    get isConnected() { return (this._conn); }
    /** Connect to database. */
    async connect() {
        console.log('NSqlServer: connect.');
        await setImmediate(() => { });
        if (this._conn) return; // skip if is connected.
    }
    /**
     * Execute Query.
     * @param {Object} opts The query options.
     */
    async query(opts) {
        let result = {};
        console.log('NSqlServer: execute query.');
        await setImmediate(() => { });
        try {
            result.data = {};
        }
        catch (err) {
            result.err = err;
        }
        return result;
    }
    /**
     * Execute stored procedure.
     * @param {Object} opts The stored procedure options.
     */
    async execute(opts) {
        let result = {};
        console.log('NSqlServer: execute stored procedure.');
        await setImmediate(() => { });
        try {
            result.data = {};
        }
        catch (err) {
            result.err = err;
        }
        return result;
    }
    /** Disconnect from database. */
    async disconnect() {
        console.log('NSqlServer: disconnect.');
        await setImmediate(() => { });
        if (this._conn) { }
        this._conn = null;
    }
}

/** The Microsoft SQL Server database connection base class. */
module.exports = exports = SqlServer;

/*
(() => {
    let paths = require('./nlib.paths');
    // Test Root Path.
    console.log('nlib.mssql.js root path detected:', paths.root);
})();
*/
