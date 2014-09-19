/* global Promise, Fmk */

/** @module services/sites/site */

//Helper dependencies.

/**
 * Helper in order to build promises from backbone models and collections.
 * @type {object}
 */
var Promisify = Fmk.Helpers.promisifyHelper;

/**
 * Application urls.
 * @type {objects}
 */
var URL = require('../../models/URL');


/**
* Perform an ajax request in order to load a **site** by its id.
* This method will be called by the view when loading the datas.
* @param {id} id - Identifier of the model.
* @return {object} - Return a **Promise** of loading the data.
* @url __TO_FILL__ //Example url of the server to call : localhost/api/name/id
*/
var get = function getSite(id){
  //If you want to change the default url.
  url = URL.aviation.site;
  return Promisify.model(url, {id: id}).fetch();
}

/**
* Perform an ajax request in order to save a **site** given the json.
* This method will be called by the view when saving the datas.
* @param {object} jsonSite - JSON data to save.
* @return {object} - Return a **Promise** of saving the data.
* @url __TO_FILL__ //Example url of the server to call : localhost/api/name/id
*/
var save = function saveSite(jsonSite){
  //If you want to change the default url.
  var url = URL.aviation.site;
  return Promisify.model(url, jsonSite).saveData(jsonSite);
}

/**
* Perform an ajax request in order to get the list a **site** given the json.
* @param {object} the search criteria, should be {} if no criteria.
* @param {object} the pageInfos of the search.
* @return {object} - Return a **Promise** of saving the data.
* @url __TO_FILL__ //Example url of the server to call : localhost/api/name/id
*/
var search = function searchSite(criteria, pagesInfos){
  var url = URL.aviation.sites;
  return Promisify.collection(url).fetchData({criteria: criteria, pagesInfos: pagesInfos});
}

// TODO: add needed service functions to module.exports.
/** Exposed properties of the service modlule.*/
module.exports = {
  get: get,
  save: save,
  search: search
};
