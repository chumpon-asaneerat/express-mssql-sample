const mssql = require('mssql');
const nsql = require('./NSql');

class TSql extends nsql.NSql {
    // SQL Constant(s).
    static MAX() { return mssql.MAX; }
    // SQL Types.
    static nvarchar(length) { return mssql.NVarChar(length); }
    static nchar(length) { return mssql.NChar(length); }
    static varchar(length) { return mssql.VarChar(length); }
    static char(length) { return mssql.Char(length); }
    static get ntext() { return mssql.NText; }
    static get text() { return mssql.Text; }

    static get bigint() { return mssql.BigInt; }
    static get int() { return mssql.Int; }
    static get smallint() { return mssql.SmallInt; }
    static get tinyint() { return mssql.TinyInt; }

    static numeric(precision, scale) { return mssql.Numeric(precision, scale); }
    static decimal(precision, scale) { return mssql.Decimal(precision, scale); }
    static get float() { return mssql.Float; }
    static get real() { return mssql.Real; }
    static get money() { return mssql.Money; }
    static get smallmoney() { return mssql.SmallMoney; }

    static get bit() { return mssql.Bit; }
    static varbinary(length) { return mssql.VarBinary; }
    static get binary() { return mssql.Binary; }
    static get image() { return mssql.Image; }

    static get datetime() { return mssql.DateTime; }
    static get date() { return mssql.Date; }
    static time(scale) { return mssql.Time(scale); }
    static get smalldatetime() { return mssql.SmallDateTime; }
    static datetime2(scale) { return mssql.DateTime2(scale); }
    static datetimeoffset(scale) { return mssql.DateTimeOffset(scale); }

    static get guid() { return mssql.UniqueIdentifier; }

    static get default() { return mssql.NVarChar(50); }

    static toType(str) {
        let result = super.toType(str);
        return result;
    }
};

exports.TSql = module.exports.TSql = TSql;

class NMSSqlServer {
    constructor() {
        this._conn = null;
        this._err = null;
    };
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
    /**
     * Create new Request object from current connection pool.
     */
    request() {
        let req = null;
        if (!this._conn) return req;
        // create request object from current connection pool.
        req = new mssql.Request(this._conn);
        return req;
    };
    
    async adhoc(queryText, pObj, params) {
        let result = { data: {}, errors: { errNum: -1, errMsg: 'No connection' }};
        if (!this._conn) return result;
        try {
            // use prepare-unprepare.
            let ps = new mssql.PreparedStatement(this._conn); // create PreparedStatement Object.
            params.forEach(p => ps.input(p.name, p.type)); // extract parameter(s).
            await ps.prepare(queryText);
            let ret = await ps.execute(pObj);
            await ps.unprepare();
            result = { data: ret, errors: { errNum: 0, errMsg: '' }};
        }
        catch (err) {
            console.error('query error.', err);
            result = { data: {}, errors: { errNum: 1, errMsg: err.message }};
        }
        return result;
    }
};

exports.NMSSqlServer = module.exports.NMSSqlServer = NMSSqlServer;

/*
*** SAMPLE CASE: Use Array for generate parameters for SQL IN Clause

var skus = ['product1', 'product2', 'product3'];

// the statement
SELECT *
FROM stock AS s
WHERE s.sku IN (@skus)

var connection = new sql.Connection(config, function(err) {
        var ps = new sql.PreparedStatement(connection);
        // Construct an object of parameters, using arbitrary keys
        var paramsObj = params.reduce((obj, val, idx) => {
            obj[`id${idx}`] = val;
            ps.input(`id${idx}`, sql.VarChar(200));
            return obj;
        }, {});
        // Manually insert the params' arbitrary keys into the statement
        var stmt = 'select * from table where id in (' + Object.keys(paramsObj).map((o) => {return '@'+o}).join(',') + ')';
        ps.prepare(stmt, function(err) {
            ps.execute(paramsObj, function(err, data) {
                callback(null, data);
                ps.unprepare(function(err) {
                });
            });
        });
    });
}

*/