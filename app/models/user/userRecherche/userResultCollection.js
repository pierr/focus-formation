var Collection = Fmk.Models.PaginatedCollection;
var UserResult = require('./userResult');
/**
 * Model for a message.
 * @type {function}
 */
module.exports = Collection.extend({
  /**
   * Metadata property of the model.
   * @type {String}
   */
  modelName: "user.userResult",
  /**
   * Reference on the single Model.
   * @type {[type]}
   */
  model: UserResult
});