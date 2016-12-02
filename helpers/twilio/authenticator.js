const twilio = require("twilio");
const qs = require("querystring");

const twilioAccountSID = "AC9730bade7ee8a91b7a7ce491f3061a8d";
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;

const urlRoot = 'http://phonebuzzporter.herokuapp.com'

function authenticate(req, res, next) {
  if (req.method.toLowerCase() == "get") { // temporaily for testing
    return next();
  }

  const header = req.headers['x-twilio-signature'];
  const body = req.body;

  if (twilio.validateRequest(twilioAuthToken, header, urlRoot, body)) {
      next();
  }
  else {
      res.writeHead(403, { 'Content-Type':'text/plain' });
      res.end("something's wrong with your authentication");
  }
}

module.exports = authenticate;
