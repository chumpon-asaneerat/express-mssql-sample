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

    static toType(str) { return NSql.default; }

    static get default() { return null; }

    static toType(str) {
        let result = new NSqlTypeInfo(str);
        return result;
    }
};

exports.NSql = module.exports.NSql = NSql;

class NSqlTypeInfo {
    constructor(str) {
        let sStr = str.trim().toLowerCase();
        let sidx = sStr.indexOf('(');
        let eidx = sStr.indexOf(')');
        // get type name only (in string)
        this._type = (sidx !== -1) ? sStr.substring(0, sidx) : sStr;
        // split all parameters
        this._params = (sidx !== -1 && eidx !== -1) ?
            this._params = sStr.substring(sidx + 1, eidx).split(',') : null;
    }

    get type() { return this.type; }
    get p1() { 
        return (this._params && this._params.length >= 1) ? Number(this._params[0].trim()) : 0;
    }
    get p2() {
        return (this._params && this._params.length >= 2) ? Number(this._params[1].trim()) : 0;
    }
};

exports.NSqlTypeInfo = module.exports.NSqlTypeInfo = NSqlTypeInfo;
