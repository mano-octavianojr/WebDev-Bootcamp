import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/submit', function (req, res) {

  var street = req.body.street;
  var pet = req.body.pet;

  res.write('<h1> Your band name is: </h1>');
  res.write('<h2>' + street + pet + '</h2>');
  res.end();
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
