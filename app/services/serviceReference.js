var utilHelper = Fmk.Helpers.utilHelper;
var refHelper = Fmk.Helpers.referenceHelper;
var REF_URL = require('../config/url/reference');
/**
 * Get the autoComplete list sample.
 * @param  {string} text - The criteria.
 * @return {[type]}      [description]
 */
function getAutocompleteSampleList(text) {
    var response = {
        results: [{
            id: 1,
            text: "Row 1" + text
        }, {
            id: 2,
            text: "Row 2" + text
        }, {
            id: 3,
            text: "Row 3" + text
        }, {
            id: 4,
            text: "Row 4" + text
        }]
    };
    return utilHelper.loadLocalData(response);
}

/**
 * Get the message type response.
 * @return {undefined}
 */
function getMessageTypes() {
    return utilHelper.loadLocalData([{
        code: "1",
        label: "Erreur"
    }, {
        code: "2",
        label: "Warning"
    }, {
        code: "3",
        label: "Info"
    }, {
        code: "4",
        label: "Success"
    }]);
}

function getPolesCodes() {
    return refHelper.loadList({url: REF_URL.pole});
}

module.exports = {
    getAutocompleteSampleList: getAutocompleteSampleList,
    getMessageTypes: getMessageTypes,
    getPolesCodes: getPolesCodes
};