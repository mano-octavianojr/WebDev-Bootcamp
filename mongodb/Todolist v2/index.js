import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";


const app = express();

app.use(express.static("public"));
const port = process.env.PORT || 3000;

mongoose.connect("mongodb://127.0.0.1:27017/todolistDB");

const itemSchema = new mongoose.Schema({ name: String });

// model = capital letter
const ItemModel = mongoose.model("Item", itemSchema);

const item1 = new ItemModel({
  name: "Welcome"
});

const item2 = new ItemModel({
  name: "hit + to add"
});

const item3 = new ItemModel({
  name: "hit this to delete"
});

const defaultItems = [item1, item2, item3];

let items = [];
let workItems = [];
let q_output = [];

app.get("/", async function (req, res) {

  try {
    if (q_output.length == 0) {
      console.log('q_output length: ' + q_output.length);
      await ItemModel.insertMany(defaultItems);
      console.log("insert DBase value");

      q_output = await ItemModel.find({});
      console.log('after q_output length: ' + q_output.length);
      res.redirect("/");
    } else {
      res.render("index.ejs", {
        listTitle: "Today",
        newListItems: q_output,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/", (req, res) => {
  const item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", (req, res) => {
  res.render("index.ejs", {
    listTitle: "Work List",
    newListItems: workItems,
  });
});
app.post("/work", (req, res) => {
  const item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
