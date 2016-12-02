const twilio = require("twilio");


const twilioAccountSID = "AC9730bade7ee8a91b7a7ce491f3061a8d";
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(twilioAccountSID, twilioAuthToken);

function test() {
  client.makeCall({
      to:'+19252553528', // call me with those internship offers ;)
      from: '+19252593472', // the twilio number we am using
      url: 'https://phonebuzzporter.herokuapp.com/twilio/init'
  }, function(err, responseData) {
    console.log("call initiated");
  });
}

module.exports = {
  test: test
};
