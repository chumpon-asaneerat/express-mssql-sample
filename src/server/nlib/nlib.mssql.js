const mssql = require('mssql');
const nlib = require('./nlib.core');

class NSqlServer extends nlib.NDbConnection { 
    constructor() {}
}

module.exports.NSqlServer = exports.NSqlServer = NSqlServer;