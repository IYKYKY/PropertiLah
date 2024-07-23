const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5002;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const sellersRouter = require('./routes/sellers');
const buyersRouter = require('./routes/buyers');
const uploadImageRouter = require('./routes/uploadImage');

app.use('/sellers', sellersRouter);
app.use('/buyers', buyersRouter);
app.use('/property',uploadImageRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});