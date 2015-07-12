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

  pathWalker: function(dest, userPath) {
    var self = this;
    var createDirPath = this.resolvePath(dest, userPath);
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

      self.pathWalker(destPath, entry.parentDir);
      // html2jade
      // console.log(entry);
      var html = fs.readFileSync(entry.fullPath, "utf8");
      var option = {
        donotencode: true
      };
      if (html.match(/<head>|<body>/g)) {
        option.bodyless = true;
      }
      html2jade.convertHtml(html, option, function (err, jade) {
        var target = path.join(destPath, entry.path.replace("html", "jade"));

        fs.writeFileSync(target, jade);
      });

      // do something with each JavaScript file entry
    })
    .on('end', function (data) {
      console.log("read file end");
      cb(data);   
    })
    // .walk();
    // new DirWalker(this.resolvePath(userPath));
  }
};

