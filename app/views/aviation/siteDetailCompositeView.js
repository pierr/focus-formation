
//Dependencies
var template = require('./templates/siteDetailComposite');

/// Create and Require the child views and their corresponding models with the following pattern:
var SiteConsultEditView = require('./siteConsultEditView');
var Site = require('../../models/aviation/site');
var SecteurListView = require('./secteurListView');
var Secteur = require('../../models/aviation/secteurCollection');

/// Create and Require the service if needed.
//var Service = require('../../services/aviation/serviceSiteDetail');

/**
 * [__TO_FILL__]
 * @type {CompositeView} - see lib/views/composite-edit-view.js in fmk.
 * @property {template} template - The template of the composite, must contains container for rendering subviews.
 * @property {modelName} - The metadatas of the model which will be automatically created for the composite.
 * @property {function} saveModelSvc - The service use to save the model of your view.
 * @property {function} additionalData - Additional data you want to give to the template.
 * @property {function} initialize - Redefine all the sub views of the composite.
 */
module.exports = Fmk.Views.CompositeView.extend({
    template: template,
    modelName: "aviation.site",
    //saveModelSvc: Service.save,
    additionalData: function additionalData() {
        return { isEdit: this.isEdit };
    },
    initialize: function initializeSiteDetailCompositeView(options) {
        options = options || {};
        options.modelName = this.modelName;
        // Call the parent's initialize.
        Fmk.Views.CompositeView.prototype.initialize.call(this, options);

        /// Initiliaze the child views with the following pattern:
        this.siteConsultEditView = new SiteConsultEditView(_.extend({ model: new Site({id: options.id}) }, options));
        this.secteurListView = new SecteurListView(_.extend({ model: new Secteur() }, options));

        /// Register the child view with the following pattern:
        /// -selector: CSS selector in the CompositeTemplate where the child view will be rendered.
        /// -name: name of the view of the CompositeView object (declared in the initialization part)
        /// -type: "model" or "collection"
        /// -modelProperty: key used in the save object (that will be sent to server) to store the child view's data.
        this.registerView({
            selector: "div#siteConsultEdit",
            name: "siteConsultEditView",
            type: "model",
            modelProperty: "site"
        });
        this.registerView({
            selector: "div#secteurList",
            name: "secteurListView",
            type: "collection",
            modelProperty: "secteur"
        });
    }
});