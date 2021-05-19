const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('dotenv/config');

app.use(express.json());

//import routes
const postsRoute = require('./routes/posts');

//middleware
app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home')
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to db')
});

//start listening
const PORT = process.env.PORT || 3000;
app.listen(PORT);