const express = require('express');
const bodyParser = require('body-parser');
const app = express();



var oppmodel= require('./app/models/oppmodel.js');


const bookRouter = express.Router();
bookRouter.route('/')
    .get((req, res) => {
      oppmodel.find({}, (err, books) => {
            res.json(Opp)
        })  
    })



app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.get('/getjobinfo', (req, res) => {
  //   var awesome_instance = new oppmodel({ title: 'awesome', description:'test' });
  //   awesome_instance.save(function (err) {
  //   if (err) return handleError(err);
  //   // saved!
  // });
  oppmodel.find({}, (err, Opp) => 
  {
    var result={}
    result.obj=Opp
    res.json(result )
})  
});

app.use(function(req, res, next){
 res.setHeader('Access-Control-Allow-Origin','*')
  next();
});


app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to the database");    



}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

