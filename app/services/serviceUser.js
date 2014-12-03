var utilHelper = Fmk.Helpers.utilHelper;
var ArgumentInvalidException = Fmk.Helpers.Exceptions.ArgumentInvalidException;
var NotImplementedException = Fmk.Helpers.Exceptions.NotImplementedException;

var promisify = Fmk.Helpers.promisifyHelper;
var URL_USER = require('../config/url/user');
var URL_USER_DETAIL = URL_USER.userDetail;
var URL_USER_SEARCH = URL_USER.userSearch;

function _getPromiseUser(json) {
  return promisify.model(URL_USER_DETAIL, json);
}

/**
 * Load a user by its identifier.
 * @param  {string} userId - The user identifier.
 * @return {Promise} - The loading promise of the message.
 */
function loadUserById(userId) {
   throw NotImplementedException('The service loadUserById should be implemented.');
}


/**
 * Save a json message.
 * @param  {object} jsonMessage The json message.
 * @return {Promise}  The save promise.
 */
function saveUser(jsonUser) {
   throw NotImplementedException('The service loadUserById should be implemented.');
}

/**
 * Load a message with the given criteria.
 * @param  {object} userCriteria - The message criteria.
 * @param {object} pagesInfos - The page userList metadatas.
 * @return {Promise} - The promise of loading all the users.
 */
function loadUserListByCriteria(userCriteria, pagesInfos) {
  throw NotImplementedException('The service loadUserById should be implemented.');
}

module.exports = {
  loadUserById: loadUserById,
  saveUser: saveUser,
  loadUserListByCriteria: loadUserListByCriteria
};