var utilHelper = Fmk.Helpers.utilHelper;
var promisify = Fmk.Helpers.promisifyHelper;
var URL_ACCUEIL = require('../config/url/accueil');
var URL_USER_STAT = URL_ACCUEIL.userStats;

/**
 * Load the number of people in the company.
 * @return {Promise}
 */
function loadNumberOfPeople() {
  return promisify.model(URL_USER_STAT).fetch();
}


function loadNumberOfProjects() {
  return utilHelper.loadLocalData({
    name: Faker.Company.companyName(),
    number: Faker.random.number(2500)
  });
}
module.exports = {
  loadNumberOfPeople: loadNumberOfPeople,
  loadNumberOfProjects: loadNumberOfProjects
};