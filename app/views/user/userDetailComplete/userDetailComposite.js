//Dependencies
var template = require('./templates/userComposite');
var CompositeView = Fmk.Views.CompositeView;
module.exports = CompositeView.extend({
    template: template,
   // className: "animate bounceIn",
    initialize: function initializeUserDetailComplexe(options) {
        options = options || {};
        options.modelName = this.modelName;
        // Call the parent's initialize.
        CompositeView.prototype.initialize.call(this, options);

        //Initialize all the childViews
        this.registerUserDetailView();
       // this.registerMessageListView();
    },
    /**
     * Register the subView of userDetail.
     * @return {undefined}
     */
    registerUserDetailView: function registerUserDetailView() {
        var UserDetail = require('./userDetail');
        var UserDetailModel = require('../../../models/user/userDetail/UserModel');
        //Enregistrement dans la vue en tant que propriété.
        this.userDetail = new UserDetail({
            model: new UserDetailModel()
        });
        //Enregistremen de la vue dans le container global.
        this.registerView({
            selector: "div#userDetailContainer",
            name: "userDetail",
            type: "model",
            modelProperty: "user"
        });
    },
    /**
     * Register the subView of list of messages.
     * @return {undefined}
     */
 /*   registerMessageListView: function registerMessageListView() {
        var NumberProjectDetail = require('./numberProjectDetail');
        var NumberProjectModel = require('../../../models/accueil/home/numberProjectModel');
        //Enregistrement dans la vue en tant que propriété.
        this.numberProjectDetail = new NumberProjectDetail({
            model: new NumberProjectModel()
        });
        //Enregistremen de la vue dans le container global.
        this.registerView({
            selector: "div#messageListContainer",
            name: "messageList",
            type: "collection",
            modelProperty: "messageList"
        });
    },*/
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