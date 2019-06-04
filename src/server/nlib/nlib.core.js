/**
 * The date utilitie class.
 */
class DateUtils {
    get today() { return new Date(); }
    static get today() { return new Date(); }
}

/**
 * The common data access abstract class.
 */
class NDataAccess {
    constructor() {}
}

/**
 * The Nlib library.
 */
const nlib = {
    /**
     * The log function.
     */
    log: (message, ...optionalParams) => {
        console.log(message, ...optionalParams);
    },
    /**
     * The date utilitie class.
     */
    date: DateUtils,
}

/**
 * The Nlib library.
 */
module.exports = exports = nlib;

module.exports.NDataAccess = exports.NDataAccess = NDataAccess;