const nlib = require('./src/server/nlib/nlib.core');
const DateTime = nlib.NDateTime;

console.log('static today:', DateTime.today);

let dt = new DateTime();
console.log('instance today:', dt.today);
