function start() {
    console.log("Request for 'start'.");
    return "Hello Start";
}

function upload() {
    console.log("Request for 'upload'.");
    return "Hello Upload";
}

exports.start = start;
exports.upload = upload;