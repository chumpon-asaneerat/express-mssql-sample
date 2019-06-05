/** The .NET like DateTime class. */
class DateTime {
    /** Create new instance of DateTime. */
    constructor() {}
    /** Gets today date. */
    get today() { return new Date(); }
    /** Gets today date. (static). */
    static get today() { return new Date(); }
}

/** The .NET like Timespan class. */
class Timespan {
    /** Create new instance of Timespan. */
    constructor() {}
}

module.exports = exports = { 
    /** The .NET like DateTime class. */
    DateTime, 
    /** The .NET like Timespan class. */
    Timespan 
};