# Info: #
This module will log into your web API with the username and password you provide, get the web API token, and re-use the username, password, and token on the second request (which is where the module submits the link you provide).

## utorrent web API example ##
```
var utorrent = require('utorrent-web');
utorrent('localhost', '8080', 'admin', 'password', 'http://torrents.linuxmint.com/torrents/linuxmint-17.3-cinnamon-64bit.iso.torrent');
```