var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(__dirname + '/resources'));



app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});



app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
    console.log('Example app listening on port ' + app.get('port') );
});