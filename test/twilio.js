const expect = require("chai").expect;
const request = require('request');
const twilioHelper = require("../helpers/twilio/twilio_helper");

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

describe("twilioHelper", function() {
  describe("#isValidPhoneNumber", function() {
    it("should be good for (925) 255 3528", function() {
      expect(twilioHelper.isValidPhoneNumber("(925) 255 3528")).to.eql(true);
    });

    it("should be good for 925-255-3528", function() {
      expect(twilioHelper.isValidPhoneNumber("925-255-3528")).to.eql(true);
    });

    it("should be good for +19252553528", function() {
      expect(twilioHelper.isValidPhoneNumber("+19252553528")).to.eql(true);
    });

    it("should be good for +1925 255 3528", function() {
      expect(twilioHelper.isValidPhoneNumber("+1925 255 3528")).to.eql(true);
    });

    it("should not be good for (92) 255 3528", function() {
      expect(twilioHelper.isValidPhoneNumber("(92) 255 3528")).to.eql(false);
    });

    it("should not be good for 925-x255-3528", function() {
      expect(twilioHelper.isValidPhoneNumber("925-x255-3528")).to.eql(false);
    });

    it("should not be good for +192'52553528", function() {
      expect(twilioHelper.isValidPhoneNumber("+192'52553528")).to.eql(false);
    });

    it("should not be good for +255 3528", function() {
      expect(twilioHelper.isValidPhoneNumber("+255 3528")).to.eql(false);
    });

    it("should not be good for (9252)553528"); //TODO
  });
});
