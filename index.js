var request = require('request');
var j = request.jar();
var request = request.defaults({jar:j});
utorrent = module.exports = function(host, port, user, password, link) {
        request.get({method: 'GET', uri: 'http://' + host + ':' + port + '/gui/token.html', jar: j, auth: {user: user, pass: password, sendImmediately: false}}, function (error, response, body) {
        var regex = new RegExp('<div id=(?:\'|")token(?:\'|")[^>]+>(.*)</div>');
        var matches = regex.exec(body);
        request('http://' + user + ':' + password + '@' + host + ':' + port + '/gui/?token=' + matches[1] + '&action=add-url&s=' + link), function (err, request2, bod) {

        }
      })
}