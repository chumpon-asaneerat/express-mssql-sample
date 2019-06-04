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
        await setImmediate(() => { });
        console.log('connect.');
        if (this.isConnected) return; // skip if is connected.
    }
    /**
     * Execute Query.
     * @param {Object} opts The query options.
     */
    async query(opts) {
        let result = {};
        await setImmediate(() => { });
        console.log('execute query.');
        if (!this.isConnected) {
            console.log('No connection.');
            result.err = 'No connection.';
            return result;
        }
        return result;
    }
    /**
     * Execute stored procedure.
     * @param {Object} opts The stored procedure options.
     */
    async execute(opts) {
        let result = {};
        await setImmediate(() => { });
        console.log('execute stored procedure.');
        if (!this.isConnected) {
            console.log('No connection.');
            result.err = 'No connection.';
            return result;
        }
        return result;
    }
    /**
     * disconnect from database.
     */
    async disconnect() {
        await setImmediate(() => { });
        console.log('disconnect.');
        if (this.isConnected) { }
        this._conn = null;
    }
}

module.exports.NSqlServer = exports.NSqlServer = NSqlServer;