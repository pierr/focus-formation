var dbUser = require('./db').user;
var dbMessage = require('./db').message;
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
  //console.log(params.id, dbUser.getDB()[params.id]);
  var user = dbUser.getDB()[params.id];
  if (!user) {
    NotFound(reply);
  } else {
    reply(user);
  }

}

function saveUser(request, reply) {
  var params = request.params;
  var jsonDB = dbUser.getDB();
  var user;
  var jsonUser = request.payload;
  jsonUser.imagePath = require('./tmp/imageCircle');
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
  dbUser.saveDB(jsonDB);
  reply(jsonUser);
}

function getUserList(request, reply) {
  var userList = _.map(dbUser.getDB(), function(value, key) {
    return value;
  });
  reply(userList).header("X-Total-Count", userList.length)
                 .header("content-type", "application/json; charset=utf-8;json+list")
    .header('Access-Control-Expose-Headers', "X-Total-Count");

}

function getUserStats(request, reply) {
  var userList = _.map(dbUser.getDB(), function(value, key) {
    return value;
  });
  reply({
    name: "Klee",
    number: userList.length,
    bikeNumber: _.where(userList, {
      locomotionCode: "1"
    }).length,
    carNumber: _.where(userList, {
      locomotionCode: "3"
    }).length,
    busNumber: _.where(userList, {
      locomotionCode: "2"
    }).length,
    footNumber: _.where(userList, {
      locomotionCode: "0"
    }).length + _.where(userList, {
      locomotionCode: undefined
    }).length,
    motoNumber: _.where(userList, {
      locomotionCode: "4"
    }).length
  });
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

function getLocomotionList(request, reply) {
  reply([{
    code: "0",
    label: "foot"
  }, {
    code: "1",
    label: "bike"
  }, {
    code: "2",
    label: "bus"
  }, {
    code: "3",
    label: "car"
  }, {
    code: "4",
    label: "motocycle"
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
var getLocomotionReferenceListRoute = {
  method: 'GET',
  path: "/reference/locomotion",
  config: {
    handler: getLocomotionList
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

var getUserStatsRoute = {
  method: 'GET',
  path: '/accueil/userStats',
  config: {
    handler: getUserStats
  }
};

module.exports = [
  createUserRoute,
  saveUserRoute,
  getUserRoute,
  getUserListRoute,
  getPoleReferenceListRoute,
  getLocomotionReferenceListRoute,
  getUserStatsRoute
];

//https://github.com/simonlast/node-persist