import express from "express";
import bodyParser from "body-parser";

// NOTE: Codes below are used to replicate the func of __dirname.
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// - - - - - 

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render('index.ejs');
});

app.post("/submit", (req, res) => {

  var fullName = req.body.fName + req.body.lName;
  var totalCount = fullName.length;

  res.render('index.ejs',
    {
      title: `There are ${totalCount} letters in your name `
    });

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
