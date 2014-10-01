var application = require('../application');

module.exports = Fmk.Helpers.Router.extend({
  routes: {
    'aviation/sites': 'sites',
    'aviation/site/:id': 'site',
    'aviation/siteComposite/:id': 'siteComposite',
    'aviation/secteurs': 'secteurs'
  },
  sites: function sites () {
    var View = require('views/aviation/siteSearchView');
    var Model = require('models/aviation/site');
    application.layout.setActiveMenu('aviation');
    application.layout.content.show(new View({
    	model: new Model()
    }));
  },
  site: function site (id) {
    var View = require('views/aviation/siteConsultEditView');
    var Model = require('models/aviation/site');
    application.layout.setActiveMenu('aviation');
    application.layout.content.show(new View({
      model: new Model({
        id: id
      })
    }));
  },
  siteComposite: function siteComposite (id) {
    var View = require('views/aviation/siteDetailCompositeView');
    var Model = require('models/aviation/site');
    application.layout.setActiveMenu('aviation');
    application.layout.content.show(new View({
        id: id
    }));
  },
  secteurs: function secteurs () {
    var View = require('views/aviation/secteurListView');
    var Model = require('models/aviation/secteurCollection');
    application.layout.content.show(new View({
      model: new Model()
    }));
  }
});