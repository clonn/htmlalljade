require("chai").should();

var exec = require("../index");
var fs = require("fs");
var fsX = require("fs-extra");

describe('get jade in every folder and compile', function(done) {
  
  it('execute html conver to jade', function(done) {
    exec.execute("testFolder/src", "testFolder/dest", function (data, stat) {
    
      var result = fs.readFileSync("testFolder/dest/some/path/wowowow.jade", "utf8")
      result.indexOf("div").should.be.above(0);

      return done();
    });
    
  });

  after(function (done) {
    fsX.removeSync('testFolder/dest/some')
    return done();
  });
});