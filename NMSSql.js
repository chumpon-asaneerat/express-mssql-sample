const mssql = require('mssql');

/**
 * The mssql database connection.
 */
class NMSSql {
    constructor() {
        this._conn = null;
    };
    /**
     * Connect to database.
     * @param {Object} opts The database connection option.
     */
    async connect(opts) {
        this._conn = new mssql.ConnectionPool(opts);
        return await this._conn.connect(opts); // No callback so return promise.
    }
    /**
     * Disconnect from database.
     */
    async disconnect() {
        if (this._conn) await this._conn.close();
        this._conn = null;
    }
}


module.exports = exports = NMSSql;