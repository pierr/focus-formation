/** 
 * @module app/views/aviation/siteSearchView
 * @description This view is use in : __TO_FILL__
 */

//Dependencies
var ResultsView = require('./siteResultView');
var template = require('./templates/siteSearch');
var ResultCollection = require('../../models/aviation/siteCollection');
var SiteSvc = require('../../services/aviation/serviceSite');

/**
 * [__TO_FILL__]
 * @type {SearchView} - define the searchview for site see lib/views/search-view.js in fmk..
 * @property {class} Results - Collection use for the results.
 * @property {function} search - Service to do the search.
 * @property {template} template - Search view template.
 * @property {array} referenceNames - The list of references to load.
 * @property {class} ResultsView - The Result view of the search pages.
 */
module.exports = Fmk.Views.SearchView.extend({
	Results: ResultCollection,
  	ResultsView: ResultsView,
	search: SiteSvc.search,
  	template: template,
  	referenceNames: []
});