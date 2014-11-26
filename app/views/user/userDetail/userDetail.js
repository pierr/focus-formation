//Dependencies.
var ConsultEditView = Fmk.Views.ConsultEditView;
var userSvc = require('../../../services/serviceUser');
/**
 * @module 'views/message/message/messageDetail'
 * @type {ConsultEditView}
 */
module.exports = ConsultEditView.extend({
  /**
   * Options de la vue.
   * @type {Object}
   */
  customOptions:{
    isModelToLoad: true,
    isSaveOnServer: true,
    isNavigationOnSave: false,
    isEditMode: true,
    isEdit: false,
    DEBUG: true
  },
  //referenceNames:['pole'],
  /**
   * Template de consultation de la vue.
   * @type {function}
   */
  templateConsult: require('./templates/userConsult'),
  /**
   * Template d'edition de la vue.
   * @type {function}
   */
  templateEdit: require('./templates/userEdit'),
  /**
   * Service to call in order to load the data from a service.
   * @type {function}
   */
  getModelSvc: userSvc.loadUserById,
  /**
   * Service which is called in order to save the message.
   * @type {function}
   */
  saveModelSvc: userSvc.saveUser
});