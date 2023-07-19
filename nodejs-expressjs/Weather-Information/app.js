import express from 'express';
import https from 'https';
import bodyParser from 'body-parser';

// NOTE: Codes below are used to replicate the func of __dirname.
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// - - - - - 

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req, res) {

    res.sendFile(__dirname + '/index.html');

});

app.post('/', function (req, res) {

    const api_key = 'c0c457f19e5b7c1a2b14a754f822cbf5';
    const q = req.body.city;
    const units = 'metric';
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + q + '&appid=' + api_key + '&units=' + units;

    https.get(url, function (https_res) {
        // response from the API
        https_res.on('data', function (data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDesc = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURl = 'https://openweathermap.org/img/wn/' + icon + '@2x.png';
            res.write('<p>Wheater condition is: ' + weatherDesc + '</p>');
            res.write('<h1>' + q + ' temperature is: ' + temp + '</h1>');
            res.write('<img src=' + imageURl + '></img>');
            res.send();
        });
    });
});

app.listen(3000, function () { console.log('server is running in port 3000.') });