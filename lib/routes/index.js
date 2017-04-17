const app = require('../app');

app.get('/', (req, res) => {
  res.send('index');
});

require('./user/users');
