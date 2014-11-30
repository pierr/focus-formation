//Dependencies
var SearchView = Fmk.Views.SearchView;
var userSvc = require('../../../services/serviceUser');
var userCriteriaTemplate = require('./templates/userCriteria');
var UserResultCollection =  require('../../../models/user/userRecherche/userResultCollection');
var UserResultView =  require('./userResults');

/**
 * View to display the search page.
 * @module 'views/message/messageRecherche/messageCriteria'
 */
module.exports = SearchView.extend({
  /**
   * Service call in order to load the data from the given criteria.
   * @type {[type]}
   */
  search: userSvc.loadUserListByCriteria,
  /**
   * Template use to display the criteria.
   * @type {[type]}
   */
  template: userCriteriaTemplate,
  /**
   * Collection contenant les résultats.
   * @type {Collection}
   */
  Results: UserResultCollection,
  /**
   * View used in order to display the Results.
   * @type {View}
   */
  ResultsView: UserResultView,
  /**
   * Button create handler.
   * @return {undefined}
   */
  create: function(event){
    event.preventDefault();
    Backbone.history.navigate('user/new', true);
  }
});