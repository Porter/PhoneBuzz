const twilio = require("twilio");
const qs = require("querystring");

const twilioAccountSID = "AC9730bade7ee8a91b7a7ce491f3061a8d";
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;

const urlRoot = 'http://phonebuzzporter.herokuapp.com'

function authenticate(req, res, next) {
  const header = req.headers['x-twilio-signature'];
  const body = req.body;
  const url = req.protocol + '://' + req.get('host') + req.originalUrl;

  if (twilio.validateExpressRequest(req, twilioAuthToken)) {
    next();
  }
  else {
    console.log("not valid");
    console.log(twilioAuthToken, header, url, body);
    console.log(JSON.stringify(req.headers));
    console.log(JSON.stringify(body));
    res.writeHead(403, { 'Content-Type':'text/plain' });
    res.end("something's wrong with your authentication");
  }
}

module.exports = authenticate;
