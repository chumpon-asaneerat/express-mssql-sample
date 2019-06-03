const path = require("path");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const bodyparser = require("body-parser");
const cookieparser = require("cookie-parser");
const favicon = require("serve-favicon");

const uuidv1 = require("uuid/v1");

const APPNAME = "Express MsSQL Sample";
const PORT = 3000;
const app = express();

app.use(helmet());
app.use(morgan("dev"));

app.use(cookieparser("winnt@123"));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

//console.log('__dirname:', __dirname);
//console.log('require.main.filename:', require.main.filename);

const iconpath = path.join(__dirname, "public", "favicon.ico");
app.use(favicon(iconpath));

function checkClientCookie(req, res, next) {
    let client = req.signedCookies.client;
    if (!client) {
        client = { id: uuidv1() };
        let opt = {
            signed: true,
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 356 * 10 // maxAge = 10 years.
        };
        res.cookie("client", client, opt);
    }
    res.locals.client = client;
    next();
}

app.use(checkClientCookie);

const nsql = require("./NMSSql");
const db = new nsql.NMSSql();
const opts = {
    server: 'localhost',
    database: 'TestDb7x3',
    user: 'sa',
    password: 'winnt123',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
}

async function getSimpleQueryBase() {
    await db.connect(opts);
    let result = await db.query('SELECT * FROM CUSTOMER');
    await db.disconnect();    
    return result;
}

app.get("/", (req, res) => {
    let dbResult = { records: [], errors: { errNum: 0, errMsg: '' } };
    (async () => {
        try {
            let ret = await getSimpleQueryBase(); // try catch here.
            dbResult.records = ret.recordsets[0];
        }
        catch (err) {
            dbResult.errors.errNum = 101;
            dbResult.errors.errMsg = err.message;
        }
    
        let result = {
            id: res.locals.client.id,
            data: dbResult,
            msg: "It's work!!."
        };
        res.json(result);
    })()
});

const nlib = require('./src/server/nlib');
if (nlib) { 
    console.log(nlib)
    console.log(new nlib());
}

const server = app.listen(PORT, () => {
    console.log(`${APPNAME} listen on port: ${PORT}`);
});
