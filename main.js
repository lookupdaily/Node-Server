var http = require('http')
var date = require('./src/time')

http.createServer((request,response) => {
  response.writeHead(200, {'Content-Type': 'text/html'})
  response.write('The date and time are currently: ' + date.timeNow())
  response.end()
}).listen(8080)

