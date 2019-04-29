const mssql = require('mssql');

class NMSSql {
    constructor() {
        this._conn = null;

        //console.log('constructor => entry filename:', require.main.filename);
    }

    async connect(opts) {
        this._conn = new mssql.ConnectionPool(opts);
        return await this._conn.connect(opts); // No callback so return promise.
    }

    async query(sqlText) {
        let result = { 
            data: {},
            err: null
        }
        let req = new mssql.Request(this._conn);
        return await req.query(sqlText); // No callback so return promise.
    }

    async disconnect() {
        if (this._conn) await this._conn.close();
        this._conn = null;
    }
};

exports.NMSSql = module.exports.NMSSql = NMSSql;