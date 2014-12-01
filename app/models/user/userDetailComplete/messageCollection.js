var Collection = Fmk.Models.Collection;
var Message = require('./message');
/**
 * Model for a message.
 * @type {function}
 */
module.exports = Collection.extend({
  /**
   * Metadata property of the model.
   * @type {String}
   */
  modelName: "message.message",
  /**
   * Reference on the single Model.
   * @type {[type]}
   */
  model: Message
});