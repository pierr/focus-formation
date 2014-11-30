module.exports = function(filePath) {
  /**
   * The fileName.
   * @type {String}
   */
  var FILE_PATH = filePath;

  /**
   * Get the database.
   * @type {object}
   */
  var db = require(FILE_PATH);

  /**
   * Write the file.
   * @type {object}
   */
  var writeFile = require('../util/fileWriter');

  /**
   * [getDB description]
   * @return {[type]} [description]
   */
  function getDB() {
    return db;
  }

  /**
   * Save the database.
   * @return {object}
   */
  function saveDB(json) {
    db = json;
    writeFile(json, FILE_PATH);
  }
  return {
    getDB: getDB,
    saveDB: saveDB
  };
};