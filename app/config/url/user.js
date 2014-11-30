//Dependencies.
var API = require('../index').apiroot;
var root = API + "/user";

/**
 * Module user 's URLs.
 * @type {Object}
 */
module.exports = {
  /**
   * Search user.
   * @type {string}
   */
  userSearch:  root  + "/search" ,
  /**
   * Access to a user url.
   * @type {string}
   */
  userDetail:  root
};