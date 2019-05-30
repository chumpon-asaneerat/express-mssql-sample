/*
Implement guide:
1. add PrepareStatement methods for adhoc query.
2. add execute methods for execute stored procedure.
3. add gulp task for generate sp json files to descripe sp call information 
   (like parameter data typpe, length, precision/scale, etc.)
4. Verify need to generate js file to wrap around how to call stored procedure of function
//5. Add helper function for convert string data type to mssql data type.
6. Implement nlib function to map exists input parameter (within object) with json sp descriptor.
7. Checks how to convert async method to sync method with returns value.
8. Date compare for check last changed.
*/

const mssql = require('mssql');

/**
 * Mapped Type Convert functions.
 */
const Convert = {
    "nvarchar": mssql.NVarChar,
    "nchar": mssql.NChar,
    "varchar": mssql.VarChar,
    "char": mssql.Char,
    "ntext": mssql.NText,
    "text": mssql.Text,

    "bigint": mssql.BigInt,
    "int": mssql.Int,
    "smallint": mssql.SmallInt,
    "tinyint": mssql.TinyInt,

    "numeric": mssql.Numeric,
    "decimal": mssql.Decimal,
    "float": mssql.Float,
    "real": mssql.Real,
    "money": mssql.Money,
    "smallmoney": mssql.SmallMoney,

    "bit": mssql.Bit,
    "varbinary": mssql.VarBinary,
    "binary": mssql.Binary,
    "image": mssql.Image,

    "datetime": mssql.DateTime,
    "date": mssql.Date,
    "time": mssql.Time,
    "smalldatetime": mssql.SmallDateTime,
    "datetime2": mssql.DateTime2,
    "datetimeoffset": mssql.DateTimeOffset,

    "guid": mssql.UniqueIdentifier,
    "UniqueIdentifier": mssql.UniqueIdentifier
}

/**
 * DbType helper class.
 */
class DbType {
    /**
     * Extract type information fron string.
     * @param {String} str Database Column Type in string.
     */
    static extract(str) {
        let sStr = str.trim().toLowerCase();
        let sidx = sStr.indexOf('(');
        let eidx = sStr.indexOf(')');
        let result = {};
        // get type name only (in string)
        result.type = (sidx !== -1) ? sStr.substring(0, sidx).trim() : sStr.trim();
        // split all parameters
        result.params =  (sidx !== -1 && eidx !== -1) 
            ? sStr.substring(sidx + 1, eidx).split(',').map(p => Number(p))
            : null;
        return result;
    }
    static parse(str) {
        let tObj = DbType.extract(str);
        let sType = tObj.type;
        let p1 = (tObj.params && tObj.params.length >= 1) ? tObj.params[0] : 0;
        let p2 = (tObj.params && tObj.params.length >= 2) ? tObj.params[1] : 0;
        return (p1) ? (p2) ? Convert[sType](p1, p2) : Convert[sType](p1) : Convert[sType]();
    }
}

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

    async exec(sp_opts) {
        let req = new mssql.Request(this._conn);
        sp_opts.inputs.forEach(p => {
            req.input(p.name, DbType.parse(p.type), p.value);
        });
        sp_opts.outputs.forEach(p => {
            req.output(p.name, DbType.parse(p.type), p.value);
        });
        return await req.execute(sp_opts.name);
    }

    async query(qry_opts) {
        let ps = new mssql.PreparedStatement(this._conn);
        qry_opts.inputs.forEach(p => {
            ps.input(p.name, DbType.parse(p.type));
        });
        qry_opts.outputs.forEach(p => {
            req.output(p.name, DbType.parse(p.type));
        });
        await ps.prepare(qry_opts.text);
        let result = await ps.execute(qry_opts.value);
        await ps.unprepare();
        return result;
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


/*

ALTER PROCEDURE [dbo].[GetCustomers]
(
  @langId nvarchar(3) = NULL
, @customerId nvarchar(30) = NULL
, @enabled bit = NULL
)

*/