const path = require('path')

module.exports = {
    entry: {
       helloWorld:  path.resolve(__dirname, 'src', 'index.js'),
       helloWorld2:  path.resolve(__dirname, 'src', 'index2.js'),
    }
};
