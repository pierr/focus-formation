//Dependances.
var Router = Fmk.Helpers.Router;
var application = require('../application');

/**
 * Router gêrant le module user.
 * @module  'app/router/user'
 */
module.exports = Router.extend({
  /**
   * Routes du module user.
   * @type {Object}
   */
  routes: {
    'user': 'userSearchRoute',
    'user/:userId': 'userDetailRoute'
  },
  /**
   * Traitement de la route de recherche d'un utilisateur.
   * @return {[type]} [description]
   */
  userSearchRoute: function userSearchRoute() {
    var UserCriteria = require('../models/user/userRecherche/userCriteria');
    var UserCriteriaView = require('../views/user/userRecherche/userCriteria');
    application.layout.setActiveMenu('user');
    application.layout.content.show(new UserCriteriaView({
      model: new UserCriteria()
    }));
  },
  /**
   * Traitement de la route detail d'un utilisateur.
   * @param  {string} messageId - Identifiant d'un utilisateur.
   * @return {undefined}
   */
  userDetailRoute: function userDetailRoute(userId) {
    var UserModel = require('../models/user/userDetail/userModel');
    var UserDetailView = require('../views/user/userDetail/userDetail');
    application.layout.setActiveMenu('user');
    application.layout.content.show(new UserDetailView({
      model: new UserModel({
        id: userId
      })
    }));
  },
  /**
   * Traitement de la route permettant l'affichage des messages d'un utilisateur.
   * @param  {string} userId    - Identifiant de l'utilisateur
   * @return {undefined}
   */
  userMessage: function userMessageRoute(userId) {
    alert('NotImplemented: messageRecherche');
  },
  /**
   * Traitement de la route permettant l'affichage des messages d'un utilisateur.
   * @param  {string} userId    - Identifiant de l'utilisateur
   * @param  {string} messageId - Identifiant du message
   * @return {undefined}
   */
  userMessages: function userMessagesRoute(userId, messageId) {
    alert('NotImplemented: messageRecherche');
  }

});