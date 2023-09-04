import express from 'express'
import bodyParser from 'body-parser';
import ejs from 'ejs'
import mongoose from 'mongoose';

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

start_db();

//TODO

app.listen(3000, function () {
    console.log("Server started on port 3000");
});


function start_db() {
    mongoose.connect('mongodb://127.0.0.1:27017/wikiDB');
}