var http = require('http');
var exec = require('child_process').exec;

var server = http.createServer(function(request, response) {
  var cmd = "echo 'db.stats().ok' | mongo 127.0.0.1:27017/test --quiet";
  exec(cmd, function(error, stdout, stderr) {
    if(error != null) {
      response.writeHead(404, {'Content-Type': 'application/json'});
      response.end(JSON.stringify({err: stderr}));
      return;
    }
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify({status: 'ok', stdout: stdout}));
  });
});

var port = process.env.PORT || 80;

server.listen(port);
console.log('Server is listening');
