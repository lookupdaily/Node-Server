const fs = require('fs')

fs.appendFile('public/file.txt', "Hello, world!", (err) => {
  if (err) throw err
  console.log('Saved!')
})

fs.open('public/file1.txt', 'w', (err,file) => {
  if(err) throw err
  console.log('saved')
})

fs.writeFile('public/')
