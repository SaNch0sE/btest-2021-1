const express = require('express');
const api = require('./components/api/api.router');

const app = express();

app.use('/', api.router);

module.exports = app;
