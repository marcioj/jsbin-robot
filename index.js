var Nightmare = require('nightmare');

function JsbinRobot(url) {
  this.url = url || 'http://jsbin.com/?html,css,js,output';
}

JsbinRobot.prototype.send = function(data, callback) {
  var generatedUrl;
  callback = callback || function() {};

  new Nightmare()
    .goto(this.url)
    .evaluate(function(data) {
      var javascriptEditor = $('.javascript.panel .CodeMirror')[0].CodeMirror;
      var htmlEditor = $('.html.panel .CodeMirror')[0].CodeMirror;
      var cssEditor = $('.css.panel .CodeMirror')[0].CodeMirror;
      javascriptEditor.setValue(data.js);
      htmlEditor.setValue(data.html);
      cssEditor.setValue(data.css);
    }, function() {}, data)
    .wait()
    .url(function (url) {
      generatedUrl = url;
    })
    .run(function(err) {
      if (err) return callback(err);
      callback(undefined, generatedUrl)
    });
}

module.exports = JsbinRobot;
