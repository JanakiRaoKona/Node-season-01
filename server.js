const http = require('http');

const server = http.createServer(function (req, res) {
    if (req.url === "/sec") { 
        res.end("There is sec data");
    }
    if (req.url === '/') {
        res.end("Hello world");
    }
});
server.listen(1000)