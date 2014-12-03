var application = require('../application');
var NotImplementedException = Fmk.Helpers.Exceptions.NotImplementedException;

module.exports = Fmk.Helpers.Router.extend({
  routes: {
    '': 'home',
    'home': 'home'
  },
  /**
   * Route à implémenter pour la page d'accueil.
   * @return {undefined}
   */
  home: function homeRoute() {
    var HomeView = require('views/home-view');
    application.layout.setActiveMenu('home');
    application.layout.content.show(new HomeView());
  }
});