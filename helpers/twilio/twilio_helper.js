const twilio = require("twilio");


const twilioAccountSID = "AC9730bade7ee8a91b7a7ce491f3061a8d";
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(twilioAccountSID, twilioAuthToken);

function test(number, callback) {
  client.makeCall({
      to:number,
      from: '+19252593472', // the twilio number we am using
      url: 'http://phonebuzzporter.herokuapp.com/twilio/init'
  }, callback);
}

module.exports = {
  test: test
};
