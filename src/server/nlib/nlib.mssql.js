const mssql = require('mssql');
const nlib = require('./nlib.core');

/**
 * The Microsoft SQL Server database connection base class.
 */
class NSqlServer extends nlib.NDbConnection { 
    constructor() {
        super();
        this._conn = null;
    }
    /**
     * Get Config Full File Name. (json object).
     */
    getConfigFileName() { return ''; }

    /**
     * Checks is database conncted.
     */
    get isConnected() { return (this._conn); }
    /**
     * connect to database.
     */
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
    /**
     * disconnect from database.
     */
    async disconnect() {
        console.log('NSqlServer: disconnect.');
        await setImmediate(() => { });
        if (this._conn) { }
        this._conn = null;
    }
}

module.exports.NSqlServer = exports.NSqlServer = NSqlServer;

/*
(() => {
    // Test Root Path.
    console.log('nlib.mssql.js root path detected:', nlib.paths.root);
})();
*/