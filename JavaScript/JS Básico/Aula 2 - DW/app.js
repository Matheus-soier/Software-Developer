let http = require('http');

http.createServer(function(req, res) {
    res.end("mensagem de texto")
}).listen(8081);

console.log('servidor ativo!');