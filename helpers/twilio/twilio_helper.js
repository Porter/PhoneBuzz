const twilio = require("twilio");


const twilioAccountSID = "AC9730bade7ee8a91b7a7ce491f3061a8d";
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(twilioAccountSID, twilioAuthToken);

function test(number, callback) {
  if (!isValidPhoneNumber(number)) {
    return callback("Sorry, but " + number + " is not a valid number");
  }
  client.makeCall({
      to:number,
      from: '+19252593472', // the twilio number we am using
      url: 'http://phonebuzzporter.herokuapp.com/twilio/init'
  }, callback);
}

function goToPlayBack(number, digits, callback) {
  if (!isValidPhoneNumber(number)) {
    return callback("Sorry, but " + number + " is not a valid number");
  }
  client.makeCall({
      to:number,
      from: '+19252593472', // the twilio number we am using
      url: 'http://phonebuzzporter.herokuapp.com/twilio/playback?digits='+digits
  }, callback);
}

function contains(arr, n) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == n) return true
  }
  return false;
}

function isValidPhoneNumber(number) {
  // phone numbers should only be numbers and +, -, (, ), or ' '
  // eg +19252553528 or (925) 255 3528
  const validChars = ["+", '-', "(", ")", " "];

  const zero = "0".charCodeAt(0);
  const nine = "9".charCodeAt(0);
  var newNumber = "";
  for (var i = 0; i < number.length; i++) {
    var charCode = number.charCodeAt(i);
    var char = number[i];

    if (charCode < zero || charCode > nine) {
      if (!(contains(validChars, char))) {
        return false;
      }
    }
    else {
      newNumber += char;
    }
  }
  // return true if the number has the right number of digits
  return newNumber.length == 10 || newNumber.length == 11
}

module.exports = {
  test: test,
  isValidPhoneNumber: isValidPhoneNumber
};
