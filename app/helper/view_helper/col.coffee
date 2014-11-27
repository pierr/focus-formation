Handlebars.registerHelper "col", (nb)->
  html = "col-xs-12 col-sm-#{nb} col-md-#{nb} col-lg-#{nb}"
  return new Handlebars.SafeString(html)