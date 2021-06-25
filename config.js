require('dotenv').config();

const config = {
  env: {
    port: process.env.PORT || 3000,
  },
  dbConfig: {
    host: process.env.DBHOST || 'localhost',
    port: process.env.DBPORT || 7001,
    dbName: process.env.DBNAME || 'test',
  },
  authConfig: {
    // Token expiration time in minutes
    tokenExpTime: process.env.EXPTIME || 10,
  },
};

module.exports = config;
