require('babel-register')({
    presets: [ 'env' ]
});
require('dotenv').config();

// yaImport the rest of our application.
module.exports = require('./index.js')