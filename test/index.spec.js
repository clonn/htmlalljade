
var exec = require("../index");


describe('get jade in every folder and compile', function(done) {
  it(', have to compile all jade and walk recursive', function (done) {
    return done();
  });

  it.only('run', function(done) {
    exec.execute("testFolder/src", "testFolder/dest", function (data, stat) {
      console.log("test ---")
      console.log(data);
      console.log(stat);
      return done();  
    });
    
  });
});