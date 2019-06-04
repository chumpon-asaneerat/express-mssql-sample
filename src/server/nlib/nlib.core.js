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
    constructor() {}
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
