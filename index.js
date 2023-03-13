//import statements
const express = require("express");
const mongoose = require ('mongoose');
const dotenv = require('dotenv');
const product =  require('./routes/item.route') //imports routes for the products
const mongodb =  require('./utils/db')



//config
const PORT = process.env.PORT || 5000

dotenv.config();
mongodb;

//server init
const app = express();


//middleware
app.use(express.json());


//all api routes goes here
app.use('/products', product);



//app start

app.listen(PORT, () => {
    console.log(`Server is running${PORT}`);
});


// Export the Express API
module.exports = app;