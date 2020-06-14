var mongoose = require("mongoose");

var forms = new mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    modified: String,
    thumbnail: {
        path: String,
        extension: String
    },
    resourceURI: String,
    comics: {
        available: Number,
        collectionURI: String,
        items: Array,
        returned: Number
    },
    series: {
        available: Number,
        collectionURI: String,
        items: Array,
        returned: Number
    },
    stories: {
        available: Number,
        collectionURI: String,
        items: Array,
        returned: Number
    },
    events: {
        available: Number,
        collectionURI: String,
        items: Array,
        returned: Number
    }
})

module.exports = mongoose.model("forms", forms);
