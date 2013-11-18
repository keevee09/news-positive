

var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");
 


pageMod.PageMod({
  include: "*",     // TODO:  Set to array of common news site URL's
  contentScriptFile: [data.url("jquery-1.10.2.min.js"),
                      data.url("positive.js")]
});


var widgets = require("sdk/widget");
var tabs = require("sdk/tabs");
var self = require("sdk/self");

// Create the toolbar icon
var widget = widgets.Widget({
  id: "translater-link",
  label: "View vague-ifier on Github",
  contentURL: "https://github.com/favicon.ico",
  onClick: function() {
    tabs.open("http://www.github.com/dmcaw221/");
  }
});

