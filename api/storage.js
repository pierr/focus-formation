var storage = require('node-persist');
storage.init({
  dir: '/Users/pierrebesson/Dev/pierr/focus-starter-kit/api/tmp/',
  stringify: JSON.stringify,
  parse: JSON.parse,
  encoding: 'utf8',
  logging: false, // can also be custom logging function
  continuous: true,
  interval: false
});

function _createUser(id) {
storage.setItem('user/'+ id, {user: "pierr"});
}

function init(){
  for(var i = 0; i < 100; i++){
    _createUser(i);
  }
}


module.exports = {
  storage: storage,
  init: init
};