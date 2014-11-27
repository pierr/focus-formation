var application = require('../application');
module.exports = Fmk.Helpers.Router.extend({
  routes: {
    '': 'home',
    'home': 'home'
  },
  home: function() {
    var HomeView = require('../views/accueil/home/homeComposite');
    var HomeModel = Backbone.Model.extend({modelName: "accueil.home"});
    application.layout.setActiveMenu('home');
    application.layout.content.show(new HomeView({model: new HomeModel()}));
  }
});