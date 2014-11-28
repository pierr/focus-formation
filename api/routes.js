
var route = {
  method: 'GET',
  path: '/user',
  config: {
    handler: getUser
  }
};
//https://github.com/simonlast/node-persist

var storage = require('node-persist');