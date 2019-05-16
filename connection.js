const mongoose = require("mongoose");

var url = "mongodb+srv://Sanja:admin@cluster0-prmcx.mongodb.net/test?retryWrites=true";

mongoose.connect(url);

mongoose.Promise = global.Promise;

let db = mongoose.connection

db.on("error", console.error.bind("Mongo connection error"));