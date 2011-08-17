function start(response) {
    console.log("Request handler 'start' was called.");
        response.writeHead(200, {
            "Content-Type": "text/plain"
        });
        response.write("Start starting things");
        response.end();
}

function upload(response) {
    console.log("Request handler 'upload' was called.");
        response.writeHead(200, {
            "Content-Type": "text/plain"
        });
        response.write("Start Uploading things");
        response.end();
}

exports.start = start;
exports.upload = upload;