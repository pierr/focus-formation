var db = require('./db');
var jsonDB = db.getDB();
var guid = require('./util/guid');
var _ = require('underscore');

function NotFound(reply) {
  reply('The user was not found').code(404);
}

function Invalid(reply) {
  reply('The request is not correct').code(422);
}

function getUser(request, reply) {
  //console.log(request);
  var params = request.params;
  //console.log(params.id, db.getDB()[params.id]);
  var user = db.getDB()[params.id];
  if (!user) {
    NotFound(reply);
  } else {
    reply(user);
  }

}

function saveUser(request, reply) {
  var params = request.params;
  var jsonDB = db.getDB();
  var user;
  var jsonUser = request.payload;
  if (params.id) {
    user = jsonDB[params.id];
    if (!user) {
      return NotFound(reply);
    }
    if (jsonUser.id !== params.id) {
      return Invalid(reply);
    }
  } else {
    if (jsonUser.id) {
      return Invalid(reply);
    }
    jsonUser.id = guid();

  }
  jsonDB[jsonUser.id] = jsonUser;
  db.saveDB(jsonDB);
  reply(jsonUser);
}

function getUserList(request, reply) {
  var userList = _.map(db.getDB(), function(value, key) {
    return value;
  });
  reply({value: userList, "odata.count": userList.length});
}

function getPoleList(request, reply) {
  reply([{
    code: "0",
    label: "PGI"
  }, {
    code: "1",
    label: "PGC"
  }, {
    code: "2",
    label: "PGS"
  }, {
    code: "3",
    label: "KI"
  }, {
    code: "4",
    label: "Comptabilité"
  }, {
    code: "5",
    label: "Commerce"
  }, {
    code: "6",
    label: "Conseil"
  }, {
    code: "7",
    label: "DT"
  }, {
    code: "8",
    label: "Direction"
  }]);
}


var getUserListRoute = {
  method: 'POST',
  path: "/user/search",
  config: {
    handler: getUserList
  }
};

var getPoleReferenceListRoute = {
  method: 'GET',
  path: "/reference/pole",
  config: {
    handler: getPoleList
  }
};

var getUserRoute = {
  method: 'GET',
  path: '/user/{id}',
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
  path: '/user/{id}',
  config: {
    handler: saveUser
  }
};

module.exports = [
  createUserRoute,
  saveUserRoute,
  getUserRoute,
  getUserListRoute,
  getPoleReferenceListRoute
];

//https://github.com/simonlast/node-persist