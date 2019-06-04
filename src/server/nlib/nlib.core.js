class NDateTime {
    constructor() {}
    /**
     * Gets today date.
     */
    get today() { return new Date(); }
    /**
     * Gets today date. (static).
     */
    static get today() { return new Date(); }
}

class NTimespan {
    constructor() {}
}

class NDbConnection {
    constructor() { }

    /**
     * Get Config Full File Name. (json object).
     */
    getConfigFileName() { return ''; }    

    /**
     * Checks is database conncted.
     */
    get isConnected() { return false; }
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
        let result = {};
        await setImmediate(() => { });
        console.log('execute query.');
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
        return result;
    }
    /**
     * disconnect from database.
     */
    async disconnect() {
        await setImmediate(() => { });
        console.log('disconnect.');
    }
}

/**
 * The Nlib library.
 */
const nlib = {
    // common functions.
    /**
     * The log function.
     */
    log: (message, ...optionalParams) => {
        console.log(message, ...optionalParams);
    },
    // Related classes.
    /**
     * The .NET like DateTime class.
     */
    NDateTime: NDateTime,
    /**
     * The .NET like Timespan class.
     */
    NTimespan: NTimespan,
    /**
     * The common Database Connection abstract class.
     */
    NDbConnection: NDbConnection
}

/**
 * The Nlib library.
 */
module.exports = exports = nlib;
