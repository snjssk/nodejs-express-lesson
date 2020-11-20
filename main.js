const express = require('express')
const path = require('path')
const ejs = require('ejs')
const app = express()

// ejs setting
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

// static files
app.use(express.static(path.join(__dirname, 'public')));

// json
app.get('/', (req, res) => {
  res.json({
    name: 'Mike'
  })
})

// html file
app.get('/html', (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'src/pages/index.html'))
  res.render('./index')
})
app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'src/pages/about.html'))
})

app.listen(18080, () => {
  console.log('App listening')
})
