//Dependencies
var template = require('./templates/homeComposite');
var CompositeView = Fmk.Views.CompositeView;
module.exports = CompositeView.extend({
    template: template,
    initialize: function initializeGraphCompositeView(options) {
        options = options || {};
        options.modelName = this.modelName;
        // Call the parent's initialize.
        CompositeView.prototype.initialize.call(this, options);

        //Initialize all the childViews
        this.registerNumberPeopleIndcator();
        this.registerNumberProjectIndcator();
        this.registerNews();
        this.registerArrivalContainer();
        /// Initiliaze the child views with the following pattern:
        //this.graphConsultEditView = new GraphConsultEditView(_.extend({ model: new Graph() }, options));

        /// Register the child view with the following pattern:
        /// -selector: CSS selector in the CompositeTemplate where the child view will be rendered.
        /// -name: name of the view of the CompositeView object (declared in the initialization part)
        /// -type: "model" or "collection"
        /// -modelProperty: key used in the save object (that will be sent to server) to store the child view's data.
        //this.registerView({ selector: "div#graphConsultEdit", name: "graphConsultEditView", type: "model", modelProperty: "graph" });
    },
    /**
     * Register the subView of number of people.
     * @return {undefined}
     */
    registerNumberPeopleIndcator: function registerNumberPeopleIndcator() {
        var NumberPeopleDetail = require('./numberPeopleDetail');
        var NumberPeopleModel = require('../../../models/accueil/home/numberPeopleModel');
        //Enregistrement dans la vue en tant que propriété.
        this.numberPeopleDetail = new NumberPeopleDetail({
            model: new NumberPeopleModel()
        });
        //Enregistremen de la vue dans le container global.
        this.registerView({
            selector: "div#numberPeopleIndcatorContainer",
            name: "numberPeopleDetail",
            type: "model",
            modelProperty: "numberPeopleIndcator"
        });
    },
    /**
     * Register the subView of number of projects.
     * @return {undefined}
     */
    registerNumberProjectIndcator: function registerNumberProjectIndcator() {

    },
    /**
     * Register the news view.
     * @return {undefined}
     */
    registerNews: function registerNews() {},
    /**
     * Register the arrivals view.
     * @return {undefined}
     */
    registerArrivalContainer: function registerArrivalContainer() {

    }
});