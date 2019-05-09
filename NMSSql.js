const mssql = require('mssql');

class NMSSqlServer {
    constructor() {
        this._conn = null;
        this._err = null;
    };
    /**
     * Gets the ConnectionPool Instance. (Remove later).
     */
    get connection() { return this._conn; }
    /**
     * Checks is connection is in connected status.
     */
    get connected() { return (this._conn && this._conn.connected); }
    /**
     * Create connection pool to database with specificed options.
     * @param {Object} opts The connection options.
     */
    async connect(opts) {
        try {
            // reset error
            this._err = null;
            // if no connection so create it.
            if (!this._conn) this._conn = new mssql.ConnectionPool(opts);
            await this._conn.connect();
        }
        catch(err) {
            console.error('connection error.', err);
            this._err = err;
            this._conn = null;
        }
    };
    /**
     * Disconnect all the database connection on current pool.
     */
    async disconnect() {
        if (this._conn) {
            try {
                await this._conn.close();
            }
            catch (err) {
                console.error('disconnection error.', err);
            }
        }
        // reset variables.
        this._err = null;
        this._conn = null;
    };    
};

exports.NMSSqlServer = module.exports.NMSSqlServer = NMSSqlServer;