const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },
    {
      test:/\.s?css$/,
      use:[
        "style-loader",
        "css-loader",
        "sass-loader"
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer:{
    contentBase:path.join(__dirname, 'public'),
    port: 8080,
    historyApiFallback:true

  },
  node: {
    fs: 'empty'
  }

};

//this is the config file where we will give entry for file
//the output file
//the module object will convert all jsx synatx to javascript using babel loader
//we dont need to add mode-modules
//devtool is used to find error in console beacause it will show exactly where errors are coming
//without devtool it is difficult to find error beacsue the errors are shown in bundle.js file and its not easy to identify
//devserver is used to run the server and build it
//we have to install webpack-dev-server and it will add in package.json file
//dev server can help you to run and for that we have to run yarn run dev-server command

//w used normalize.css to support styles in all browsers and we installed normalize.css for that
