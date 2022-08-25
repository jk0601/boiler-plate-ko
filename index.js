const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jk0601:esyOGqQ3OPyIH3wH@cluster0.gqjc0vo.mongodb.net/test')
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!~~~Jackey 안녕!!!'))

app.listen(port, () => console.log(`Example app listening on port ${port}`))