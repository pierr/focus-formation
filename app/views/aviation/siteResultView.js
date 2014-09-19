/** 
 * @module app/views/sites/siteResultView
 * @description This view is use in  the SearchView:app/views/sites/siteSearchView  __TO_FILL__
 */

//Dependencies
var template = require('./templates/siteResult');
var _url = Fmk.Helpers.urlHelper;


/**
 * [__TO_FILL__]
 * @type {SearchResultsView} - see lib/views/search-result-view.js in fmk.
 * @property {template} template- The result template of your view.
 * @property {array} referenceNames - The list of the references you need in your view.
 * @property {boolean} isShowDetailInside - Option to say if the result is display in the view
 */
module.exports = Fmk.Views.SearchResultsView.extend({
    template: template,
    referenceNames: [],
    isShowDetailInside: false,
    generateNavigationUrl: function generateNavigationUrl(id) {
        return _url.generateUrl([this.model.model.prototype.modelName.replace('.', '/'), id]);
    },
});
