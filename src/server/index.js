const express = require('express') ;
const mongoose = require('mongoose') ;
const config = require('./config/dev');
const Rental = require('./models/rental');
const FakeDb = require('./fake-db');

const rentalRoutes = require('./routes/rental')

mongoose.connect(config.DB_URI).then(() => {
    const fakeDb = new FakeDb();
    fakeDb.seedDb();
});
const app = express();

app.use('/api/v1/rentals' , rentalRoutes);

app.listen(3000 , ()=> {
    console.log("App is running");
})