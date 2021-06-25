const tokenExpTime = require('../../config').authConfig;

function getSecret() {
  return 0;
}

function getToken() {
  getSecret();
  return tokenExpTime;
}

module.exports = { getToken };
