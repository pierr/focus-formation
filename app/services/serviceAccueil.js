var utilHelper = Fmk.Helpers.utilHelper;


/**
 * Load the number of people in the company.
 * @return {Promise}
 */
function loadNumberOfPeople(){
  return utilHelper.loadLocalData({
    name: Faker.Company.companyName(),
    number: Faker.random.number(500)
  });
}

module.exports = {
  loadNumberOfPeople: loadNumberOfPeople
};
