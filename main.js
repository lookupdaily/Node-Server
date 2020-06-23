var http = require('http')
var url = require('url')
var fs = require('fs')


http.createServer((request,response) => {
  const query = url.parse(request.url, true)
  let filename = "./views/" + query.pathname + '.html'
  fs.readFile(filename, (err, data) => {
    if(err) {
      response.writeHead(404, {'Content-Type': 'text/html'})
      return response.end("404 not found")
    }
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.write(data)
    return response.end()
  })
}).listen(8080)

