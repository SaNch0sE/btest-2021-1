const express = require('express');
const API = require('./api');

const router = express.Router();

router.post('/signin', API.signIn);

router.post('/signup', API.signUp);

router.get('/', API.helloworld);

router.get('/info', API.getUserInfo);

router.get('/latency', API.getLatency);

router.get('/logout/:all', API.logout);

module.exports = { router };
