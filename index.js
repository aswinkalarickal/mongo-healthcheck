var http = require('http');
var MongoClient = require('mongodb').MongoClient;

var server = http.createServer(function(request, response) {
  var mongo_address = process.env.MONGO_ADDRESS || 'localhost';
  var mongo_port = process.env.MONGO_PORT || '27017';

  var url = 'mongodb://' + mongo_address + ':' + mongo_port + '/test';
  MongoClient.connect(url, function(err, db) {
    if(err != null) {
      response.writeHead(404, {'Content-Type': 'application/json'});
      response.end(JSON.stringify({err: err}));
      return;
    }
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify({status: 'ok'}));
    db.close();
  });
});

var port = process.env.PORT || 80;

server.listen(port);
console.log('Server is listening');
