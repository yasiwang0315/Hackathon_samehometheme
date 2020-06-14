const request = require('request');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var assert = require('assert');
var util = require('util');
var forms = require("./database/CharacterModel");
var customers = require("./database/NewModel");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/marvel');

var forms = mongoose.model('forms');
var customers = mongoose.model("customers");
// call api constantly and insert data
// for (i = 1; i < 730; i++) {
//     const url = "https://superheroapi.com/api/292110568642138/" + i.toString();
//     console.log(url);
//     request(url, function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//             console.log(typeof body) // Print the google web page.
//             result = JSON.parse(body);
//             console.log(result)
//             customers.create(result, function (err, doc) {
//                 if (err) { console.log(err); }
//             })
//             customers.find({}, function (err, data) { console.log(err, data, data.length); });
//         }
//     })
// }
// set index in mongodb
// db.customers.createIndex( { "$**": "text" } )
// customers.find({
//     "powerstats.speed": { $gt: 10, $lte: 90 },
//     "powerstats.strength": { $gt: 10, $lte: 90 },
//     "appearance.gender": "Male",
//     $or: [{ "appearance.hair-color": "Red" }, { "appearance.hair-color": "-" }],
//     //"appearance.eyecolor": "-",
//     //"work.occupation": "-"
//     //"appearance.eye-color": "Red",

// }, function (err, data) { console.log(err, data, data.length); });

app.get("/:intelligence/:strength/:speed/:gender/:hair/:eye/:occupation", function (req, res) {
    const oc = req.params.occupation;
    customers.find({
        // $text: { $search: oc },
        //appearance:{ $elemMatch: { gender: "Female", eye-color: ""A" "} } 
        "powerstats.intelligence": { $gt: parseInt(req.params.speed) - 25, $lte: parseInt(req.params.speed) + 25 },
        "powerstats.speed": { $gt: parseInt(req.params.speed) - 25, $lte: parseInt(req.params.speed) + 25 },
        "powerstats.strength": { $gt: parseInt(req.params.speed) - 25, $lte: parseInt(req.params.speed) + 25 },
        "appearance.gender": req.params.gender,
        $or: [{ "appearance.hair-color": req.params.hair }, { "appearance.hair-color": "-" }],
        $or: [{ "appearance.eye-color": req.params.eye }, { "appearance.eye-color": "-" }],
        $or: [{ "work.occupation": req.params.occupation }, { "work.occupation": "-" }],



    })
        .then(products => {
            console.log(products)
            res.send(products)
        })
        .catch(e => console.error(e));

});


app.listen(8080, function () {

    console.log("started!");
});

