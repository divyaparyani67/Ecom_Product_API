const mongoose = require ("mongoose");
require('dotenv').config({ path: '.env' });
;

mongoose.set('strictQuery', false);
//connecting with mongodb
const connectDb = mongoose.connect(process.env.MONGO_DB_URI)
.then(() => console.log("MongoDB connection is successful!"))
.catch((err) => {
    console.log(err);
    process.exit(1)
});

module.exports = connectDb;