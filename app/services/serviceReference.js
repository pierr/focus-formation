var utilHelper = Fmk.Helpers.utilHelper;
var refHelper = Fmk.Helpers.referenceHelper;
var REF_URL = require('../config/url/reference');
/**
 * Get the autoComplete list sample.
 * @param  {string} text - The criteria.
 * @return {Promise}
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
 * @return {Promise}
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

/**
 * Get the pole list codes.
 * @return {Promise}
 */
function getPolesCodes() {
    return refHelper.loadList({
        url: REF_URL.pole
    });
}

/**
 * Get the locomotion reference list.
 * @return {Promise}
 */
function getLocomotionCodes() {
    return refHelper.loadList({
        url: REF_URL.locomotion
    });
}

module.exports = {
    getAutocompleteSampleList: getAutocompleteSampleList,
    getMessageTypes: getMessageTypes,
    getPolesCodes: getPolesCodes,
    getLocomotionCodes: getLocomotionCodes
};