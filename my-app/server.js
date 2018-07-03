const express = require('express');
const bodyParser = require('body-parser');
const app = express();



var oppmodel= require('./app/models/oppmodel.js');


const JobRouter = express.Router();
JobRouter.route('/getjobinfo1')
    .get((req, res) => {
      oppmodel.find({}, (err, Opp) => {
        var result={}
        result.obj=Opp
        res.json(result )
        })  
    })

    app.use(function(req, res, next){
      res.setHeader('Access-Control-Allow-Origin','*')
       next();
     });

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.get('/getjobinfo', (req, res) => {
  //   var awesome_instance = new oppmodel(
     
  //     {
  //       JobCode:"6003",
  //       JobType:"DotNet Developer",
  //       Summary:"Responsibilities Power Programmer is an important initiative within Global Delivery to develop a team of Full Stack Developers who will be working",
  //       PrimarySkills:"Dot net 4.5,MVC,Angular",
  //       SecondarySkills:"Rest, Web Services, Node JS",
  //       YearsOfExperience:"4-6 Years",
  //       NumberofOpenings:"3",
  //       JobLocation:"Hyderabad"
  //       }
  //   );
  //    awesome_instance.save(function (err) {
  //    if (err) return handleError(err);
  //   // saved!
  // });
   oppmodel.find({}, (err, Opp) => 
  {
    var result={}
    result.obj=Opp
    res.json(result )
})  
});

app.get('/getOpp/:JobCode', (req, res) => 
{
  var code=req.params.JobCode
  code=code.replace('JobCode=','')
   // oppmodel.findById(req.params.JobCode, (err, Opp) => 
   oppmodel.find({'JobCode':code}, (err, Opp) => 
  {
    console.log('id:'+ code)
    var result={};
    result.obj=Opp
    res.json(result )
})  
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

