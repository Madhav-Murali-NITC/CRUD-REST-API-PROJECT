const express = require('express');
const mongoose = require('mongoose');

const url = 'mongodb://localhost/AlienDbex';


const app = express();

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const con = mongoose.connection;
app.use(express.json());


const alienRouter = require('./routes/aliens');

app.use('/aliens', alienRouter);





con.once('open', () => {
    console.log('Connected to MongoDB');
});

app.listen(9000, () => {
    console.log('Server started on port 9000');
});
