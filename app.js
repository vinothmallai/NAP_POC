// app.js

const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route'); // Imports routes for the products
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://microland:Pa55word@cluster0-ne3tk.mongodb.net/vinoth?retryWrites=true';
const mongoDB = process.env.DB_CONNECTION || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

let port = 1234;


app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});