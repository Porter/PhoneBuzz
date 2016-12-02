const expect = require("chai").expect;
const request = require('request');

describe("xml responding endpoints", function() {

  describe("the site", function() {
    it("should be up", function(done) {
      request('http://localhost:8000/', function (err, response, body) {
        if (err) { return done(err); }
        try {
          expect(body).to.eql("ok");
          done();
        }
        catch(e) {
          done(e);
        }
      });
    });
  });

  describe("/twilio/init", function() {
    it("should be right", function(done) {
      request('http://localhost:8000/twilio/init', function (err, response, body) {
        if (err) { return done(err); }
        try {
          expect(body).to.eql(
`<?xml version="1.0" encoding="UTF-8"?><Response><Gather timeout="30" action="/twilio/playback" finishOnKey="*"><Say>Please enter the number you would like me to count to, and then press *</Say></Gather></Response>`);
          done();
        }
        catch(e) {
          done(e);
        }
      });
    });
  });
});
