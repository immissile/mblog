var qn     = require('qn');
var config = require('config');

//7牛云存储 client
var qnClient = null;
if (config.qn_access && config.qn_access.secretKey !== '') {
  qnClient = qn.create(config.qn_access);
}

module.exports = qnClient;
