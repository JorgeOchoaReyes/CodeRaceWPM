const express = require('express');
const cors = require('cors');
const {urlencoded, json} = require('body-parser'); 
const WordQuery = require('./queries/words');
const leaderboardQuery = require('./queries/leaderboard'); 
const mongoose = require('mongoose');
const path = require('path');

const app = express();
require('dotenv').config();


const uri = process.env.DB_URI;

mongoose.connect(uri)
    .then(() => console.log('You have Successfully Connected MongoDb.........'))
    .catch(err => console.error("There was an error connecting with mongoose: " + err));

app.use(json()); 
app.use(cors()); 
app.use(urlencoded({extended: true})); 
app.use('/language', WordQuery); 
app.use('/leaderboard', leaderboardQuery); 

//Serve Static assets in __prod__

if(process.env.NODE_ENV == 'production') {
    //Set Static folder here to be made 
    app.use(express.static('client/build'));

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 3000; 

app.listen(port, () => {
    console.log('Listening on port ' + port);
});


module.exports = app; 
