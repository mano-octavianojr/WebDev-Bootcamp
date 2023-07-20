//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from 'express';
import bodyParser from 'body-parser';

// NOTE: Codes below are used to replicate the func of __dirname.
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// - - - - - 



const port = 3000;
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/check', function (req, res) {
    var input_password = req.body.password;

    if (input_password === "12345") {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.redirect('/');
    }
});

app.listen(port, function () {
    console.log(`Listening on port ${port}`);
});