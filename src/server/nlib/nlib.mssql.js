const mssql = require('mssql');
const nlib = require('./nlib.core');

class NSqlServer extends nlib.NDataAccess { 
    constructor() {}
}

module.exports.NSqlServer = exports.NSqlServer = NSqlServer;