/* global Promise, Fmk */

/** @module services/aviation/secteur */

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
* Perform an ajax request in order to load a **secteur** by its id.
* This method will be called by the view when loading the datas.
* @param {id} id - Identifier of the model.
* @return {object} - Return a **Promise** of loading the data.
* @url __TO_FILL__ //Example url of the server to call : localhost/api/name/id
*/
var get = function getSecteur(id){
  //If you want to change the default url.
  //url = URL.aviation.secteur;
  return Promisify.model(url, {id: id}).fetch();
}

/**
* Perform an ajax request in order to save a **secteur** given the json.
* This method will be called by the view when saving the datas.
* @param {object} jsonSecteur - JSON data to save.
* @return {object} - Return a **Promise** of saving the data.
* @url __TO_FILL__ //Example url of the server to call : localhost/api/name/id
*/
var save = function saveSecteur(jsonSecteur){
  //If you want to change the default url.
  var url = URL.aviation.secteur;
  return Promisify.model(url, jsonSecteur).saveData(jsonSecteur);
}

/**
* Perform an ajax request in order to get the list a **secteur** given the json.
* @param {object} the search criteria, should be {} if no criteria.
* @param {object} the pageInfos of the search.
* @return {object} - Return a **Promise** of saving the data.
* @url __TO_FILL__ //Example url of the server to call : localhost/api/name/id
*/
var search = function searchSecteur(criteria, pagesInfo){
  var url = URL.aviation.secteur;
  return Promisify.collection(url).fetchData({criteria: criteria, pagesInfo: pagesInfo});
}

// TODO: add needed service functions to module.exports.
/** Exposed properties of the service modlule.*/
module.exports = {
  get: get,
  save: save,
  search: search
};
