const path = require('path');
const ExtractTextPlugin=require('extract-text-webpack-plugin')

//we are using node so we dont have access to import so thats why we are using require
module.exports =(env)=> {
  const isProduction= env==="production";
  const CSSExtract=new ExtractTextPlugin('styles.css');
  return{
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
      use:CSSExtract.extract(
        {
          use:[
            {
              loader:'css-loader',
              options:{
                sourceMap:true
              }
            },
            {
              loader:"sass-loader",
              options:
              {
                sourceMap:true
              }
            }
            
          ]
        }
      )
    }]
  },
  plugins:[
    CSSExtract
  ],
  devtool: isProduction ?" source-map":'inline-source-map',
  devServer:{
    contentBase:path.join(__dirname, 'public'),
    port: 8080,
    historyApiFallback:true

  },
  node: {
    fs: 'empty'
  }
}
};


//source-map in devtool is used to for producton and it takes a lot of time for build 
////is used for   build:prod": "webpack -p --env production",
//whenever we run yarn run build:prod is used for production and we can get env varibale as production 
//we can optimise the webpack file for production and we are reducing unwanted code and we are making it optimised
//
//for production we are using one source map and for dev we are using different source map

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
//we have used extract-text-webpack-plugin for to generate a single styles.css
//we have to use in production and we have used css-loaders and sass-loaders 
