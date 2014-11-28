/**
 * The fileName.
 * @type {String}
 */
var FILE_PATH = __dirname + '\\db.json';

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
function getDB(){
  return db;
}

/**
 * Save the database.
 * @return {object}
 */
function saveDB(json){
  db = json;
  writeFile(json, FILE_PATH);
}

module.exports = {
  getDB: getDB,
  saveDB: saveDB
};
