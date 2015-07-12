require("chai").should();

var htmlalljade = require("..");
var fs = require("fs-extra");

describe('Path walker', function() {
  it(', read path form execute path', function(done) {
    var path = htmlalljade.resolvePath(".tmp/user/kerker", "kerker");
    (path.indexOf("/user/kerker")).should.be.above(0);
    return done();
  });
});