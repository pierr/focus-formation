module.exports = {
  initialize: function(options, context) {
    Fmk.initialize({
      domains: require('../domain/index'),
      metadatas: require('../entityDefinition/index'),
      listOptions: {
        method: "POST",
        paramsMethod: "GET",
        top: "top",
        skip: "skip",
        sortFieldName: "sortFieldName",
        sortDesc: "sortDesc"
      }
    });
  }
};