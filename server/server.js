//fundamentals of express
//we are using prodcution server
const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up!');
});

//we added above line because when we deploy our app in heroku we are telling to generate automatic port and in case if it not availbe we are giving 3000 port
//we have to pass that port variable to app.listen to run up the server
//above line we are using express application


//above line we are giving path for index.html



  
//the above line is used to give path for public and we have to give two dots to come out of the current directory 
  

//we have express application
//we have to tell where our files live and which port has to listen