const mssql = require('mssql');

/**
 * The mssql database connection.
 */
class NMSSql {
    constructor() {
        console.log('Create new instance.');
    };
    /**
     * Connect to database.
     * @param {Object} opts The database connection option.
     */
    async connect(opts) {}
    /**
     * Disconnect from database.
     */
    async disconnect() {}
}


module.exports = exports = NMSSql;