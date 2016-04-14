function start(response) {
    db.query("select * from huge_table", function (error, stdout, stderr) {
        response.writeHead(200, {"Content-Type":"text/plain"});
        response.write(stdout);
        response.end();
    });
}
exports.start = start;