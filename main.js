const express = require('express')
const path = require('path')
const app = express()

// static files

// json
app.get('/', (req, res) => {
  res.json({
    name: 'Mike'
  })
})

// html file
app.get('/html', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'src/index.html'))
})

app.listen(13000, () => {
  console.log('App listening')
})
