/** 
 * @module app/views/aviation/secteurListView
 * @description This view is use in : __TO_FILL__
 */

//Dependencies.
var ListView = Fmk.Views.ListView;
var template = require('./templates/secteurList');
var ResultSelectionModel = require('../../models/aviation/secteurCollection');
var ModelLine = require('../../models/aviation/secteur');
var LineView = require('./secteurLineView');
var Service = require('../../services/aviation/serviceSecteur');

/**
 * ListView for aviation/secteur.
 * @type {ListView} see lib/views/list-view.js in fmk.
 * @property {template} template - The template of the list view.
 * @property {array} referenceNames - The list of the references you need in your view.
 * @property {function} search - The function to call in order to load the list content.
 * @property {object} viewForEachLineConfiguration - Configuration for the view of each line.
 * @property {object} events - Events you want to add for the view.
 * @property {function} addItem - Function handling the add button.
 */
module.exports = ListView.extend({
    template: template,
    referenceNames: [],
    search: Service.search, // TODO: Implement the list method in service.
    viewForEachLineConfiguration: {
        isActive: true, //True or false will make the rendering different.
        LineView: LineView, //View to create for each line.
        ModelLineView: ModelLine, //Model for the view initialize with collection data.
        parentContainer: "table tbody"  //selector into which the view .
    },
    events: _.extend({}, ListView.prototype.events, {
        "click button.btnAdd": "addItem"
    }),
    addItem: function addItem (event) {
    	event.preventDefault();
        this.model.add(new ModelLine()); //TODO : Add properties to new models here.
    }
});
