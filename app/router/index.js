//Dependencies.
var HomeRouter = require("./homeRouter");
var MessageRouter = require('./messageRouter');
var UserRouter = require('./userRouter');
/*Router instanciation.*/
module.exports = {
  homeRouter : new HomeRouter(),
  messageRouter: new MessageRouter(),
  userRouter: new UserRouter(),
};