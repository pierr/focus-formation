var db = require('./db');
var jsonDB = db.getDB();
var getUserRoute = {
  method: 'GET',
  path: '/user',
  config: {
    handler: getUser
  }
};
var saveUserRoute = {
  method: 'POST',
  path: '/user',
  config: {
    handler: saveUser
  }
};

var createUserRoute = {
  method: 'PUT',
  path: '/user/:id',
  config: {
    handler: saveUser
  }
};


function saveUser(request, reply){
  var payload = request.payload;
  var jsonUser =  JSON.parse(payload);
  jsonDB[jsonUser.id] = jsonUser;
  db.saveDB(jsonDB);
}
//https://github.com/simonlast/node-persist

var storage = require('node-persist');