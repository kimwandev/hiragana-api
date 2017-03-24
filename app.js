import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import * as hiraganaRepo from './repository/hiragana.repository.js'

mongoose.connect('mongodb://localhost/hiraganadb');

let app = express();
let db = mongoose.connection;

app.get('/', function(req, res){
    res.send('Please use /api/hiragana API');
});

app.get('/api/hiraganas', function(req, res){
    res.header('Access-Control-Allow-Origin', '*');

    hiraganaRepo.getHiragana((err, hiraganas) => {
        if(err){
            throw err;
        }
        res.json(hiraganas);
    });
});

const portNumber = 3000;
app.listen(portNumber);
console.log('Running on port ' + portNumber + '...');