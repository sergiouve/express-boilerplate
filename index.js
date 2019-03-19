require('dotenv').config();

const log = require('./lib/log');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./http/routes/index');
const config = require('./config/app');
const errorHandler = require('./http/middlewares/errorHandler');

const app = express();
const port = config.http.port;

app.set('x-powered-by', false);
app.set('etag', false);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(router);

app.use(errorHandler);

app.listen(port, () => log.info(`Up and running on port ${port}`));

module.exports = app;
