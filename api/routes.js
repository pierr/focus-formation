var db = require('./db');
var jsonDB = db.getDB();

function getUser(request, reply){
  var params = request.params;
  console.log(params);
  reply(db.getDB());

}

function saveUser(request, reply){
  var payload = request.payload;
  var jsonUser =  JSON.parse(payload);
  jsonDB[jsonUser.id] = jsonUser;
  db.saveDB(jsonDB);
  reply(jsonDB);
}


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

module.exports = [createUserRoute, saveUserRoute, getUserRoute];

//https://github.com/simonlast/node-persist

