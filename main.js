var http = require('http')
var url = require('url')


http.createServer((request,response) => {
  response.writeHead(200, {'Content-Type': 'text/html'})
  const query = url.parse(request.url, true).query
  const text = query.year + " " + query.month
  response.end(text)
}).listen(8080)

