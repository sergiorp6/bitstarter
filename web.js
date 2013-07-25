var express = require('express');
var fs = require('fs');
var readData = null;

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    readData = fs.readFileSync('index.html');
    response.send(readData.toString('utf-8'));

});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
