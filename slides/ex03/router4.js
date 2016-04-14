function route(handle, pathname, response) {
    console.og("routing request for " + pathname);
    if (typeof handle[pathname] === 'function' ) {
        handle[pathname](response);
    } else {
        console.log("No handler found for " + pathname);
        response.writeHead(404, {"content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}
exports.route = route;