const mssql = require('mssql');
const nlib = require('./nlib.core');

class NSqlServer extends nlib.NDbConnection { 
    constructor() {
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
        console.log('connect.');
        if (this._conn) return; // skip if is connected.
    }
    /**
     * Execute Query.
     * @param {Object} opts The query options.
     */
    async query(opts) {
        let result = {};
        console.log('execute query.');
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
        console.log('execute stored procedure.');
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
        console.log('disconnect.');
        if (this._conn) { }
        this._conn = null;
    }
}

module.exports.NSqlServer = exports.NSqlServer = NSqlServer;