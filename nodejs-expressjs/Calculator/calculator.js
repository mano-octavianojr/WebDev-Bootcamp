import express from 'express';
import bodyParser from 'body-parser';

// NOTE: Codes below are used to replicate the func of __dirname.
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// - - - - - 

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get('/bmicalculator', function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/bmicalculator', function (req, res) {


    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    var bmi = (weight) / (height * height);
    res.send("Your BMI is: " + bmi);
});

app.post('/', function (req, res) {

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);


    res.send("the sum of the values is: " + (num1 + num2));
});

app.listen(3000, function () {
    console.log('listening in port 3000')
})
