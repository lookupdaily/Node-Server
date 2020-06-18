const fs = require('fs')

fs.appendFile('db/file.json', 'Hello, content 1', (err) => {
  if (err) throw err
  console.log('Saved!')
})
