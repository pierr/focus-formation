var root = require('../config').apiroot;

var urls = {
    // Here are defined all urls to server
    administration: {
        diagnosticCollection: root + '/odata/Diagnostic',
        lineModelTestCollection: root + '/odata/LineModelTestCollections',
        contact: root + "/contact",
        contactCollection: root + "/contacts"  
    },
    aviation: {
    	site: root + "/site",
    	sites: root + "/sites"
        secteur: root + "/secteur"
        secteurs: root + "/secteurs"
    },
    rightsManagement: root + "/api/permission"
};
module.exports = urls;