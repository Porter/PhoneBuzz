var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = process.env["MONGODB_URI"];

var db;

MongoClient.connect(url, function(err, r) {
  if (!err) console.log("Connected to the database");
  db = r;
});

function insertTime(delay, phoneNumber, callback) {
  var collection = db.collection('calls');
  collection.insert({
    created: new Date(),
    delay: delay,
    phoneNumber: phoneNumber
  }, callback);
}

function getTimes(callback) {
  var collection = db.collection('calls');
  collection.find({}).toArray(callback);
}

module.exports = {
  insertTime: insertTime,
  getTimes: getTimes
};
