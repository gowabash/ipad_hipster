var http = require("http");
var url = require("url");

function start(route, handler) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        route(pathname, handler, response);
    }

    http.createServer(onRequest).listen(process.env.C9_PORT);
    console.log("Server has started.");
}

exports.start = start;