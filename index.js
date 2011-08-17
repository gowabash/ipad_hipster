var server = require("./server");
var router = require("./router");

var handler = require("./requestHandler");
handler["/"] = handler.start;
handler["/start"] = handler.start;
handler["/upload"] = handler.upload;
server.start(router.route, handler);