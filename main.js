const express = require('express')
const app = express()

const mongoose = require('mongoose')
const path = require('path')
const ejs = require('ejs')
const routes = require('./routes/routes');

const connectOption = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

mongoose.connect('mongodb://localhost/lesson_db', connectOption);


// ejs setting
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

// static files
app.use(express.static(path.join(__dirname, 'public')));

// route
app.use('/', routes);


// json
app.get('/', (req, res) => {
  res.json({
    name: 'Mike'
  })
})

// html file
// app.get('/html', (req, res) => {
//   // res.sendFile(path.resolve(__dirname, 'src/pages/index.html'))
//   res.render('./index')
// })
// app.get('/about', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'src/pages/about.html'))
// })

app.listen(18080, () => {
  console.log('App listening')
})
