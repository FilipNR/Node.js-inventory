const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')
const dbURI = 'mongodb://127.0.0.1/inventory'
const routes = require('./routes/invRoutes')

const app = express();

morgan('tiny')

mongoose.connect(dbURI, () => {
    app.listen(5000);
})

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.set('view engine', 'ejs');
app.use(routes)
