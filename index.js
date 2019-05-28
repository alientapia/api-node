const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const colors = require('colors');
const app = express();
const productsRoutes = require('./routes/products');


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//rutas 
app.use('/products', productsRoutes);

app.listen(3000, () => {
    console.log('Server listen om port 3000'.green);
});