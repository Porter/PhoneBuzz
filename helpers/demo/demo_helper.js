
function parseDelay(str, callback) {
  var thingsToParse = str.split(" ");
  var seconds = 0;
  var timeMap = {
    "second": 1,
    "minute": 60,
    "hour": 3600,
    "day": 3600*24
  };
  var amount, lookingForAmount = true;
  for (var i = 0; i < thingsToParse.length; i++) {
    var toParse = thingsToParse[i];
    if (toParse.trim() == "") continue;
    if (toParse.indexOf("and") != -1) continue;

    if (lookingForAmount) {
      amount = +toParse;
      if (isNaN(amount)) {
        return callback(toParse + " is not a numeric number. Please use 0-9");
      }
      lookingForAmount = false;
    }
    else {
      var found = false;
      for (key in timeMap) {
        var len = key.length;
        if (toParse.length >= len && toParse.substring(0, len) == key) {
          seconds += amount * timeMap[key];
          lookingForAmount = true;
          found = true;
          break;
        }
      }
      if (!found) {
        return callback("Sorry, didn't recognize " + toParse + ". I know seconds, minutes, hours and days");
      }
    }
  }
  callback(null, seconds);
}

module.exports = {
  parseDelay: parseDelay
};
