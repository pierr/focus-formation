var db = require('./db');

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