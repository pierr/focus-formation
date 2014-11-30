var API = require('../index').apiroot;
var root = API + "/reference";
/**
 * URLs du  module Reference.
 * @type {Object}
 */
module.exports = {
  //Pole ws URL.
  pole:  root + "/pole",
  //Locomotion ws URL
  locomotion: root + "/locomotion"
};