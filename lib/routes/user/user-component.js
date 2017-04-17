const query = require('../../dal/connection');

class User {
  static getUsers() {
    return new Promise((resolve, reject) => {
      query.query('SELECT * FROM "user"', '', (err, result) => resolve(result.rows));
    });
  }

}

module.exports = User;
