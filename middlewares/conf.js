var config = require('config');

exports.github = function (req, res, next) {
  if (config.GITHUB_OAUTH.clientID === '' || config.GITHUB_OAUTH.clientSecret === '') {
    return res.send('call the admin to set github oauth.');
  }
  next();
};
