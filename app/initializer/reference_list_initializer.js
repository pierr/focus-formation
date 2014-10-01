//Path to the reference service.
var serviceReference = require('../services/reference/serviceReference');

module.exports = {
	initialize: function(options, context) {
  		Fmk.Helpers.referenceHelper.configure({'secteurs': serviceReference.loadSecteursList});
	}
};