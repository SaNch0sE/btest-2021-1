const app = require('./app');
const config = require('./config');

app.listen(config.env.port, () => {
  console.log(`App is listening at http://localhost:${config.env.port}`);
});
