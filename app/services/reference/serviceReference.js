var URL = require('../../models/URL');
var Promisify = Fmk.Helpers.promisifyHelper;

function loadSecteursList(text) {
	var url = URL.aviation.secteurs;
	return Promisify.collection(url).fetch();
}
module.exports = {
    loadSecteursList: loadSecteursList
};