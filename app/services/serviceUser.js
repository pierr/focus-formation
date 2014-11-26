var utilHelper = Fmk.Helpers.utilHelper;
var ArgumentInvalidException = Fmk.Helpers.Exceptions.ArgumentInvalidException;
/**
 * Load a message by its identifier.
 * @param  {string} msgId - The message identifier.
 * @return {Promise} - The loading promise of the message.
 */
function loadMessageById(msgId) {
  var jsonMessage = {
    id: msgId,
    text: Faker.Lorem.sentence(),
    date: new Date().toISOString(),
    author: Faker.Name.findName(),
    authorId: utilHelper.guid(),
    type: 1
  };
  return utilHelper.loadLocalData(jsonMessage);
}

function _getUser(id) {
  if (!id) {
    id = utilHelper.guid();
  }
  return {
    id: id,
    firstName: Faker.Name.firstName(),
    lastName: Faker.Name.lastName(),
    email: Faker.Internet.email(),
    phone: Faker.PhoneNumber.phoneNumber(),
    dateOfArrival: new Date().toISOString(),
    poleCode: 1
  };
}

/**
 * Save a json message.
 * @param  {object} jsonMessage The json message.
 * @return {Promise}  The save promise.
 */
function saveMessage(jsonMessage) {
  if (!jsonMessage.id) {
    jsonMessage.id = utilHelper.guid();
  }
  return utilHelper.loadLocalData(jsonMessage);
}

/**
 * Load a message with the given criteria.
 * @param  {object} userCriteria - The message criteria.
 * @param {object} pageInfos - The page userList metadatas.
 * @return {Promise} - The promise of loading all the users.
 */
function loadUserListByCriteria(userCriteria, pageInfos) {
  if (!_.isObject(userCriteria)) {
    throw new ArgumentInvalidException('userCriteria should be an object');
  }
  if (!_.isObject(pageInfos)) {
    throw new ArgumentInvalidException('pageInfos should be an object');
  }
  var users = [];
  [0, 1, 2, 3, 4, 5, 6, 7].forEach(function(id) {
    users.push(_getUser(id));
  });
  return utilHelper.loadLocalData({
    values: users,
    totalRecords: 8
  });
}

module.exports = {
  loadMessageById: loadMessageById,
  saveMessage: saveMessage,
  loadUserListByCriteria: loadUserListByCriteria
};