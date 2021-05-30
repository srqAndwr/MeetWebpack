const  path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = webpackMerge(baseConfig,{
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        inline: true,
        port: 8080,
        open:true
    }
});