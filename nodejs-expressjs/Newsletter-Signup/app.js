import express from 'express';
import bodyParser from 'body-parser';
import request from 'request';
import https from 'https';

// NOTE: Codes below are used to replicate the func of __dirname.
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// - - - - - 

const app = express();

// Use to make assets available on deployment.
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    console.log('app get()');
    res.sendFile(__dirname + '/signup.html');

});

app.post('/', function (req, res) {
    console.log('app post()');
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;


    const data = {
        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: fname,
                LNAME: lname
            }
        }]
    };
    const jsonData = JSON.stringify(data);

    const dc = 'us21'
    const list_id = '76ddbd94f8'
    const url = 'https://' + dc + '.api.mailchimp.com/3.0/lists/' + list_id;
    const options = {
        method: 'POST',
        auth: 'mano1:4e9e2d6c432afedb6eb305739e10039c-us21'
    };



    const request = https.request(url, options, function (https_res) {

        if (https_res.statusCode == 200) {
            res.sendFile(__dirname + '/success.html');
        } else {
            res.sendFile(__dirname + '/failure.html');
        }

        // printing the returned output.
        https_res.on('data', function (data) {
            console.log(JSON.parse(data));
        });
    });

    // This is run first before the callback.
    // We send the data needed on our request.
    request.write(jsonData);
    request.end();


});

app.get('/failure', function (req, res) {
    res.redirect("/");
});

app.listen(3000, function () {
    console.log('listening in port 3000');
});

