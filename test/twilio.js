const expect = require("chai").expect;
const request = require('request');

describe("xml responding endpoints", function() {

  describe("the site", function() {
    it("should be up", function(done) {
      request('http://localhost:8000/', function (err, response, body) {
        if (err) { return done(err); }
        try {
          expect(response.statusCode).to.eql(200);
          done();
        }
        catch(e) {
          done(e);
        }
      });
    });
  });

  describe("/twilio/init", function() {
    it("should reject without authentication", function(done) {
      request('http://localhost:8000/twilio/init', function (err, response, body) {
        if (err) { return done(err); }
        try {
          expect(body).to.eql("something's wrong with your authentication");
          done();
        }
        catch(e) {
          done(e);
        }
      });
    });
  });
});
