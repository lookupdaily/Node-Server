var http = require('http')
var url = require('url')
var fs = require('fs')


http.createServer((request,response) => {
  fs.readFile('index.html', (err, data) => {
    const query = url.parse(request.url, true).query
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.write(data)
    response.end()
  })
  

 
}).listen(8080)

