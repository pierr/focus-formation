/** 
 * @module app/views/aviation/secteurLineView
 * @description This view is use in : __TO_FILL__
 */

//Dependencies.
var ConsultEditView = Fmk.Views.ConsultEditView;
var templateConsult = require('./templates/secteurLine');
var templateEdit = require('./templates/secteurLineEdit');
var Service = require('../../services/aviation/serviceSecteur');

/**
 * [__TO_FILL__]
 * @type {ConsultEditView} - see lib/views/consult-edit.js in fmk.
 * @property {string} tagName - The html tag you want for the listView.
 * @property {template} templateConsult - The consultation template of your view.
 * @property {template} templateEdit - The edition template of your view.
 * @property {object} customOptions - The options you want to redefine in your view @see defaultOptions property of ConsultEditView.
 */
module.exports = ConsultEditView.extend({
    tagName: "tr",
    templateConsult: templateConsult,
    templateEdit: templateEdit,
    customOptions: {
        isModelToLoad: false, // Model will be loaded by parent list view.
        isEditMode: true, // Allow edit mode.
        isNavigationOnSave: false,
        isNavigationOnDelete: false,
        isSaveOnServer: false
    },
    deleteItem: function (event) {
        event.preventDefault();
        this.deleteSuccess(); // Calls the deleteSuccess function of ConsultEditView.
    }
});