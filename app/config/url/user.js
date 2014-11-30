var API = require('../index').apiroot;
var root = API + "/user";
/**
 * Urls du module user.
 * @type {Object}
 */
module.exports = {
  userSearch:  API + "/user/search" ,
  userDetail:  root
};