/*
Implement guide:
1. add PrepareStatement methods for adhoc query.
2. add execute methods for execute stored procedure.
3. add gulp task for generate sp json files to descripe sp call information 
   (like parameter data typpe, length, precision/scale, etc.)
4. Verify need to generate js file to wrap around how to call stored procedure of function
*/

const mssql = require('mssql');

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
            req.input(p.name, p.type, p.value);
        });
        sp_opts.outputs.forEach(p => {
            req.output(p.name, p.type, p.value);
        });
        return await req.execute(sp_opts.name);
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