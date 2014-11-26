/**/
var ResultsView = Fmk.Views.SearchResultsView;
var resultsTemplate = require('./templates/userResults');
/**
 * View chich contains the search results.
 * @module "views/message/messageRecherche"
 */
module.exports = ResultsView.extend({
  events:{
    "click div[data-id]": "handleLineClick"
  },
  //Gestion du click sur la ligne.
  handleLineClick: function handleLineClick(evt){
    var id = $(event.target).closest('[data-id]').attr('data-id');
    //event.target.getAttribute('data-id');
    Backbone.history.navigate('user/'+id, true);
  },
  /**
   * Template in order to display all the results.
   * @type {function}
   */
  template: resultsTemplate
});