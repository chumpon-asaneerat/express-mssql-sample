const mssql = require('mssql');
const nlib = require('./nlib.core');

class NSqlServer extends nlib.NDbConnection { 
    constructor() {}

    /**
     * connect to database.
     */
    async connect() {
        await setImmediate(() => { });
        console.log('connect.');
    }
    /**
     * Execute Query.
     * @param {Object} opts The query options.
     */
    async query(opts) {
        await setImmediate(() => { });
        console.log('execute query.');
    }
    /**
     * Execute stored procedure.
     * @param {Object} opts The stored procedure options.
     */
    async execute(opts) {
        await setImmediate(() => { });
        console.log('execute stored procedure.');
    }
    /**
     * disconnect from database.
     */
    async disconnect() {
        await setImmediate(() => { });
        console.log('disconnect.');
    }
}

module.exports.NSqlServer = exports.NSqlServer = NSqlServer;