function route(handle, pathname) {
    console.log("Routing request for " + pathname);
    
    if ( typeof handle[pathname] === 'function' ) {
        return handle[pathname]();
    } else {
        console.log("No request handler found for " + pathname);
        return "'" + pathname + "' Route Not Found";
    }
}
exports.route = route;