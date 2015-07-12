require("chai").should();

var htmlalljade = require("../index");
var fs = require("fs-extra");

describe('Path walker', function() {
  it(', read path form execute path', function(done) {
    var path = htmlalljade.resolvePath(".tmp/user/kerker");
    (path.indexOf("/user/kerker")).should.be.above(0);
    return done();
  });
});

describe('Get folder and build a folder path', function() {
  var pathDir = '.tmp/some/path';

  it(', read folder and get folder', function(done) {
    fs.mkdirsSync(pathDir);
    var result = fs.ensureDirSync(pathDir);
    console.log(result);
    done();
  });

  after(function (done) {
    fs.removeSync('.tmp/some/')
    return done();
  });
});