var http = require("http");

on_request = function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
};

http.createServer(on_request).listen(8888);
console.log('Server Started');