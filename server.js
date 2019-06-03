const nlib = require('./src/server/nlib/nlib.core');
const DateTime = nlib.date;

let dt = new DateTime();

console.log(nlib.date.today);

console.log(dt.today);
