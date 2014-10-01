/** 
 * @module app/views/aviation/siteConsultEditView
 * @description This view is use in : __TO_FILL__
 */

//Dependencies
var templateConsult = require('./templates/siteConsult');
var templateEdit = require('./templates/siteEdit');
var Service = require('../../services/aviation/serviceSite');

/**
 * [__TO_FILL__]
 * @type {ConsultEditView} - see lib/views/consult-edit-view.js in fmk.
 * @property {template} templateConsult - The consultation template of your view.
 * @property {template} templateEdit - The edition template of your view.
 * @property {function} getModelSvc - The service use to load the model of your view.
 * @property {function} saveModelSvc - The service use to save the model of your view.
 * @property {function} deleteModelSvc - The service use to delete the model of your view.
 * @property {array} referenceNames - The list of the references you need in your view.
 * @property {object} customOptions - The options you want to redefine in your view @see defaultOptions property of ConsultEditView.
 */
module.exports = Fmk.Views.ConsultEditView.extend({
    templateConsult: templateConsult,
    templateEdit: templateEdit,
    getModelSvc: Service.get, // TODO : Define the get method on service
    saveModelSvc: Service.save, // TODO : Define the save method on service
	//deleteModelSvc: serviceSite.deleteSite,// TODO : Define the delete service if needed
    referenceNames : ['secteurs'],
    customOptions: {
		//isModelToLoad: true,.
        //isEditMode: true,
        isNavigationOnSave: false,
        //isNavigationOnDelete: true,
        //isSaveOnServer: true,
        //collectionSelector: "tbody tr"
	}
});