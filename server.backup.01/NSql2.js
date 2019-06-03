
class NSql {}

module.exports.NSql = exports.NSql = NSql;

class NSqlType {
    static fromString(str) { console.log('not implements.'); }
}

module.exports.NSqlType = exports.NSqlType = NSqlType;

/*
let db = {
    query: function(str, params) {}
};
let params = [
    { name: 'param1', type:'Int', value: 123 },
    { name: 'param2', type:'nvarchar(50)', value: ['A', 'C', 'D'] }
]
db.query('select @param1 as const, id from table1 where item in @param2', params)
*/
