var utilHelper = Fmk.Helpers.utilHelper;


/**
 * Load the number of people in the company.
 * @return {Promise}
 */
function loadNumberOfPeople() {
  return utilHelper.loadLocalData({
    name: Faker.Company.companyName(),
    number: Faker.random.number(500),
    bikeNumber: Faker.random.number(10),
    carNumber: Faker.random.number(300),
    busNumber: Faker.random.number(180)
  });
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