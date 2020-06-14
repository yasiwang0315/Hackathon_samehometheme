var mongoose = require("mongoose");

var customers = new mongoose.Schema({
    "response": String,
    "id": String,
    "name": String,
    "powerstats": {
        "intelligence": String,
        "strength": String,
        "speed": String,
        "durability": String,
        "power": String,
        "combat": String
    },
    "biography": {
        "full-name": String,
        "alter-egos": String,
        "aliases": Array,
        "place-of-birth": String,
        "first-appearance": String,
        "publisher": String,
        "alignment": String
    },
    "appearance": {
        "gender": String,
        "race": String,
        "height": Array,
        "weight": Array,
        "eye-color": String,
        "hair-color": String
    },
    "work": {
        "occupation": String,
        "base": String
    },
    "connections": { "group-affiliation": String, "relatives": String },
    "image": {
        "url": String
    }
})

module.exports = mongoose.model("customers", customers);
