/** 
 * @module app/models/sites/siteCollection
 * @description This collection is use in : __TO_FILL__
 */


//Dependencies.
var URL = require('../URL');
var SingleModel = require('./site');


/**
 * [__TO_FILL__] Define a collection of site 
 * @type {PaginatedCollection} - see lib/models/paginated-collection.js in fmk.
 * @property {class} model - The class whitch represents a model of the collection: @see app/models/sites/site.
 * @property {string} modelName - It corresponds to the metadatas of the model _module.entityName_.
 * @property {object} sortField - An object which describe the default sort on the collection.
 * @property {object} exportColumnLabels - An object which describe the columns labels choosen for the exports.
 */
module.exports = Fmk.Models.PaginatedCollection.extend({
    model: SingleModel,
    modelName: "aviation.siteCollection" // TODO: Verify that the modelName is correct
    //url: URL.sites.siteCollection // TODO: define the Url and corresponding controller.
    // TODO: define the default sortField for this collection.
    //sortField: { field: "fieldName", order: "asc" },
    // TODO: if the collection can be exported, define the column labels for export.
    //exportColumnLabels: { "propertyName" : "column.label.key" }
});
