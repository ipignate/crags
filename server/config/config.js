var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db: 'mongodb://localhost/ptclimber',
    rootPath: rootPath,
    port: process.env.PORT || 3000
  },
  production: {
    db: 'mongodb://webuser:secret123@ds151289.mlab.com:51289/ptclimber',
    rootPath: rootPath,
    port: process.env.PORT || 3000
  }
}