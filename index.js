var ejs = require('ejs'),
  utils = require('loader-utils'),
  path = require('path');


module.exports = function(source) {
  this.cacheable && this.cacheable();
  var opts = utils.parseQuery(this.query);

  // Use filenames relative to working dir, which should be project root
  opts.filename = path.relative(process.cwd(), this.resourcePath);

  return ejs.render(source, opts);

};