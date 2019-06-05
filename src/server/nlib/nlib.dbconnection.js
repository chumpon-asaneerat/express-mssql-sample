/** The DbConnection abstract class. */
class DbConnection {
    constructor() { }
    /** Get Config Full File Name. (json object). */
    getConfigFileName() { return ''; }
    /** Checks is database conncted. */
    get isConnected() { return false; }
    /** Connect to database. */
    async connect() {
        await setImmediate(() => { });
        console.log('DbConnection: connect.');
    }
    /**
     * Execute Query.
     * @param {Object} opts The query options.
     */
    async query(opts) {
        await setImmediate(() => { });
        console.log('DbConnection: execute query.');
    }
    /**
     * Execute stored procedure.
     * @param {Object} opts The stored procedure options.
     */
    async execute(opts) {
        await setImmediate(() => { });
        console.log('DbConnection: execute stored procedure.');
    }
    /** Disconnect from database. */
    async disconnect() {
        await setImmediate(() => { });
        console.log('DbConnection: disconnect.');
    }
}

/** The DbConnection abstract class. */
module.exports = exports = DbConnection;