var merge = require('webpack-merge');
var prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_LOCATION: '"http://api.fomopayments.com/api"',
  API_CLIENT_ID: '""',
  API_CLIENT_SECRET: '""'
});
