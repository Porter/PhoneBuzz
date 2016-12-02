const expect = require("chai").expect;
const request = require('request');
const demoHelper = require("../helpers/demo/demo_helper");

describe("demoHelper", function() {
  describe("#parseDelay", function() {
    it("can parse 1 minute", function(done) {
      demoHelper.parseDelay("1 minute", (err, seconds) => {
        if (err) return done(err);
        try {
          expect(seconds).to.eql(60);
          done();
        }
        catch(e) { done(e); }
      })
    });

    it("can parse 1 minute, 10 seconds", function(done) {
      demoHelper.parseDelay("1 minute, 10 seconds", (err, seconds) => {
        if (err) return done(err);
        try {
          expect(seconds).to.eql(70);
          done();
        }
        catch(e) { done(e); }
      })
    });

    it("can parse 1 minute, and 10 seconds", function(done) {
      demoHelper.parseDelay("1 minute, and 10 seconds", (err, seconds) => {
        if (err) return done(err);
        try {
          expect(seconds).to.eql(70);
          done();
        }
        catch(e) { done(e); }
      })
    });

    it("fails for 1 minute, and 10"); //TODO
  });
});
