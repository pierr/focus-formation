var utilHelper = Fmk.Helpers.utilHelper;
var ArgumentInvalidException = Fmk.Helpers.Exceptions.ArgumentInvalidException;
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
  if (!_.isString(userId)) {
    throw new ArgumentInvalidException('userId should be a string', userId);
  }
  return _getPromiseUser({
    id: userId
  }).fetch();
}


/**
 * Save a json message.
 * @param  {object} jsonMessage The json message.
 * @return {Promise}  The save promise.
 */
function saveUser(jsonUser) {
  if (!_.isObject(jsonUser)) {
    throw new ArgumentInvalidException('jsonUser should be an object', jsonUser);
  }
  return _getPromiseUser(jsonUser).save();
}

/**
 * Load a message with the given criteria.
 * @param  {object} userCriteria - The message criteria.
 * @param {object} pagesInfos - The page userList metadatas.
 * @return {Promise} - The promise of loading all the users.
 */
function loadUserListByCriteria(userCriteria, pagesInfos) {
  if (!_.isObject(userCriteria)) {
    throw new ArgumentInvalidException('userCriteria should be an object');
  }
  if (!_.isObject(pagesInfos)) {
    throw new ArgumentInvalidException('pageInfos should be an object');
  }
  return promisify.collection(URL_USER_SEARCH).fetchData({
    criteria: userCriteria,
    pagesInfos: pagesInfos
  });
  // var users = [];
  // [0, 1, 2, 3, 4, 5, 6, 7].forEach(function(id) {
  //   users.push(_getUser(id));
  // });
  // return utilHelper.loadLocalData({
  //   values: users,
  //   totalRecords: 8
  // });
}

module.exports = {
  loadUserById: loadUserById,
  saveUser: saveUser,
  loadUserListByCriteria: loadUserListByCriteria
};