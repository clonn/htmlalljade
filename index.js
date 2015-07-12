/**
 * @overview
 *
 * @author
 * @version 2015/07/11
 */

var fsX = require("fs-extra");
var fs = require("fs");
var path = require("path");
var readdirp = require('readdirp');
var html2jade = require('html2jade');
// var html = "<html><body>Hello World</body></html>";

module.exports = {
  resolvePath: function (target, userPath) {
    return userPath = path.join(target, userPath);
  },

  pathWalker: function(userPath, dest) {
    var self = this;
    var createDirPath = this.resolvePath(dest, userPath);
    console.log("path walker")
    console.log(createDirPath);
    fsX.mkdirsSync(createDirPath);
  },

  diffPath: function (path, diffPath) {
    return result;
  },

  execute: function (srcPath, destPath, cb) {
    // var src = new DirWalker(srcPath);
    var self = this;

    readdirp({ 
      root: srcPath, 
      fileFilter: '*.html', 
      directoryFilter: [ '!.git', '!*modules' ]
      // entryType: 'file'
    })
    .on('data', function (entry) {
      console.log("-- entry");

      self.pathWalker(entry.parentDir, destPath);
      // html2jade
      // console.log(entry);
      var html = fs.readFileSync(entry.fullPath);
      html2jade.convertHtml(html, {}, function (err, jade) {
        var target = path.join(destPath, entry.parentDir);
        fs.writeFileSync(jade, target);
      });

      // do something with each JavaScript file entry
    })
    .on('end', function (data) {
    //   console.log("end of ...")
    //   // var bufferTarget = stats.Directory.pop();
    //   // var target = bufferTarget.split(stats.Directory[0]);
    //   // self.pathWalker(destPath, target);
      console.log("-- end");
      console.log(data)
    //   // console.log(stat)
      cb(data);   
    })
    // .walk();
    // new DirWalker(this.resolvePath(userPath));
  }
};

