import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB2');

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "why no name?"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    review: String
});

const FruitModel = mongoose.model("Fruit", fruitSchema);

// -- For single entry.

// const fruit = new FruitModel({
//     name: "Apple",
//     rating: 3,
//     review: "good"
// });

// fruit.save();

const orange = new FruitModel({
    rating: 4,
    review: "goods"
});

const lemon = new FruitModel({
    rating: 4,
    review: "sour"
});

// -- For multiple entries.

// try {
//     const insert = await FruitModel.insertMany([
//         orange,
//         lemon
//     ]);
// } catch (err) {
//     console.log(err);
// }

// -- Get values
const value = await FruitModel.find({});
value.forEach(function (fruit) {
    console.log(fruit.name);
});


mongoose.connection.close();