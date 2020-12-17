
if (process.env.Node_ENV !== 'production'){
    require('dotenv').load()
}

const express = require("express");
const app = express()
const expressLayouts = require("express-ejs-layouts");

const indexRouter = require('./routes/index');

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(static('public'))


const mongoose = require('mongoose');
connect(process.env.DATABASE_URL, {
    useNewUrlParser : true, useUnifiedTopology: true
    })

const db = connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))
app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)  