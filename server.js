const path = require('path');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const favicon = require('serve-favicon');

const uuidv1 = require('uuid/v1');

const APPNAME = 'Express MsSQL Sample';
const PORT = 3000;
const app = express();

app.use(helmet());
app.use(morgan('dev'));

app.use(cookieparser('winnt@123'));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

const iconpath = path.join(__dirname, 'public', 'favicon.ico');
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
        res.cookie('client', client, opt);
    }
    res.locals.client = client;
    next();
};

app.use(checkClientCookie);

app.get('/', (req, res) => {
    let { id } = res.locals.client;
    res.send(`It's work!!. Client id: ${id}`);
});

const server = app.listen(PORT, () => {
    console.log(`${APPNAME} listen on port: ${PORT}`);
});