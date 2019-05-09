/**
 * NSql abstract class. For each database (MSSql, Oracle, etc.) need to extends this class
 * to handle type conversion, data manipulation, etc. based on each database driver.
 */
class NSql {
    // SQL Constant(s).
    static get MAX() { return NSql.default; }
    // SQL Types.
    static nvarchar(length) { return NSql.default; }
    static nchar(length) { return NSql.default; }
    static varchar(length) { return NSql.default; }
    static char(length) { return NSql.default; }
    static get ntext() { return NSql.default; }
    static get text() { return NSql.default; }

    static get bigint() { return NSql.default; }
    static get int() { return NSql.default; }
    static get smallint() { return NSql.default; }
    static get tinyint() { return NSql.default; }

    static numeric(precision, scale) { return NSql.default; }
    static decimal(precision, scale) { return NSql.default; }
    static get float() { return NSql.default; }
    static get real() { return NSql.default; }
    static get money() { return NSql.default; }
    static get smallmoney() { return NSql.default; }

    static get bit() { return NSql.default; }
    static varbinary(length) { return NSql.default; }
    static get binary() { return NSql.default; }
    static get image() { return NSql.default; }

    static get datetime() { return NSql.default; }
    static get date() { return NSql.default; }
    static time(scale) { return NSql.default; }
    static get smalldatetime() { return NSql.default; }
    static datetime2(scale) { return NSql.default; }
    static datetimeoffset(scale) { return NSql.default; }

    static get guid() { return NSql.default; }

    static get default() { return null; }

    static SqlTI(str) { return new NSqlTI(str); }
};

exports.NSql = module.exports.NSql = NSql;

/**
 * The Sql data Type Information class.
 */
class NSqlTI {
    constructor(str) {
        let sStr = str.trim().toLowerCase();
        let sidx = sStr.indexOf('(');
        let eidx = sStr.indexOf(')');
        // get type name only (in string)
        this._type = (sidx !== -1) ? sStr.substring(0, sidx) : sStr;
        // split all parameters
        this._params = (sidx !== -1 && eidx !== -1) 
            ? this._params = sStr.substring(sidx + 1, eidx).split(',').map(p => Number(p))
            : null;
    }

    get type() { return this._type; }
    get p1() {
        return (this._params && this._params.length >= 1) ? this._params[0] : 0;
    }
    get p2() {
        return (this._params && this._params.length >= 2) ? this._params[1] : 0;
    }

    get sqltype() { return 'Not implements.'; }
};

exports.NSqlTI = module.exports.NSqlTI = NSqlTI;

// Note: cannot use arrow function in prototype because the arrow function will bind to difference
// scope. So prefer to used old style function declaration here.
/**
 * Gets Sql DataType information from String.
 */
String.prototype.toSqlTI = function() {
    let result = new NSqlTI(this);
    return result;
};

