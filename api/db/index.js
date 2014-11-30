var db = require('./db');
module.exports = {
  user: db(__dirname + '/../tmp/user.json'),
  message: db(__dirname + '/../tmp/user.json')
};
