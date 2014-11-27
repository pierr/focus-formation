//Dependencies.
var ConsultEditView = Fmk.Views.ConsultEditView;
var accSvc = require('../../../services/serviceAccueil');
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
    isSaveOnServer: false,
    isNavigationOnSave: false,
    isEditMode: false,
    isEdit: false,
    DEBUG: false
  },
  //referenceNames:['pole'],
  /**
   * Template de consultation de la vue.
   * @type {function}
   */
  templateConsult: require('./templates/numberPeopleDetailConsult'),
  /**
   * Service to call in order to load the data from a service.
   * @type {function}
   */
  getModelSvc: accSvc.loadNumberOfPeople
});