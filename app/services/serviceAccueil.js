var utilHelper = Fmk.Helpers.utilHelper;
var NotImplementedException = Fmk.Helpers.Exceptions.NotImplementedException;

var promisify = Fmk.Helpers.promisifyHelper;
var URL_ACCUEIL = require('../config/url/accueil');
var URL_USER_STAT = URL_ACCUEIL.userStats;

/**
 * Load the number of people in the company.
 * @return {Promise}
 */
function loadNumberOfPeople() {
  throw new NotImplementedException('loadNumberOfPeople service is not implemented');
}

/**
 * Load the number of projects.
 * @return {Promise}
 */
function loadNumberOfProjects() {
  throw new NotImplementedException('loadNumberOfPeople service is not implemented');
  /*return utilHelper.loadLocalData({
    name: Faker.Company.companyName(),
    number: Faker.random.number(2500)
  });*/
}
module.exports = {
  loadNumberOfPeople: loadNumberOfPeople,
  loadNumberOfProjects: loadNumberOfProjects
};