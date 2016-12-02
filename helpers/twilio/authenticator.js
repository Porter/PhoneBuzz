const twilio = require("twilio");

const twilioAccountSID = "AC9730bade7ee8a91b7a7ce491f3061a8d";
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;

const urlRoot = 'http://phonebuzzporter.herokuapp.com'

function authenticate(req, res, next) {
  const header = req.headers['x-twilio-signature'];

  if (twilio.validateRequest(twilioAuthToken, header, urlRoot, POST)) {
      next();
  }
  else {
      res.writeHead(403, { 'Content-Type':'text/plain' });
      res.end("something's wrong with you authentication");
  }
}
