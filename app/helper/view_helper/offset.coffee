Handlebars.registerHelper "offset", (nb)->
  html = "col-xs-offset-0 col-sm-offset-#{nb} col-md-offset-#{nb} col-lg-offset-#{nb}"
  return new Handlebars.SafeString(html)