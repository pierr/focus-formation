//Dependencies.
var AdminRouter = require("./administrationRouter");
var HomeRouter = require("./homeRouter");
var SiteRouter = require("./siteRouter");

/*Router instanciation.*/
module.exports = {
  adminRouter : new AdminRouter(),
  homeRouter : new HomeRouter(),
  siteRouter : new SiteRouter()
};