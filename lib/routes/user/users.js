const app = require('../../app');
const User = require('./user-component');

app.get('/users', (req, res) => {
  User.getUsers()
    .then(allUsers => {
      res.send(allUsers);
    });
});

app.post('/users', (req, res) => {
  res.send('Hello from users');
});
