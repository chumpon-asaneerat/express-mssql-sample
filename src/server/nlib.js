const path = require("path");
const fs = require('fs');
//const rootPath = path.dirname(require.main.filename);

class nlib {
    constructor() {
        console.log('new nlib instance.');
    }
};

(() => {
    //console.log('begin load modules:');
    let modulePath = path.join(__dirname, 'nlib.modules');
    let files = fs.readdirSync(modulePath);    
    files.forEach(function(fileName) {
        let fullname = path.join(modulePath, fileName);
        Object.assign(nlib, require(fullname));
    });
    //console.log('completed load modules.');
})();

//console.log('export nlib.');
exports = module.exports =  nlib;
