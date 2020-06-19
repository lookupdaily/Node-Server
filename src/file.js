const fs = require('fs')

fs.appendFile('db/file.txt', "Hello, world!", (err) => {
  if (err) throw err
  console.log('Saved!')
})

fs.open('db/file1.txt', 'w', (err,file) => {
  if(err) throw err
  console.log('saved')
})
