var http = require('http');
var mysql = require('mysql');
var express = require('express'), path = require('path');
var app = express();
var crud = require('mysql-crud');
//db connection details
var connection = mysql.createPool({
  host :'apps.fountaintechies.com',
  user : 'ftdev',
  password : '10gXWOqeaf',
	database : '80startups',
 });

 var bodyParser = require('body-parser');
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({
   extended: true
 }));

var company_jobs = crud(connection,'company_jobs');
//list company using crud
exports.getjobs=function(attrs,callback){
company_jobs.load({}, function(err, val){
 callback.json(val);
});
};

exports.addjobs = function(attrs,callback){
  console.log('add company jobs');

  var job_id = attrs.body.job_id;
  var company_id = attrs.body.company_id;
  var job_title = attrs.body.job_title;
  var job_location = attrs.body.job_location;
  var job_skills = attrs.body.job_skills;
  var job_qualification = attrs.body.job_qualification;
  var job_languages = attrs.body.job_languages;
  var job_description = attrs.body.job_description;

  console.log(job_id);
  console.log(company_id);
  console.log(job_title);
  console.log(job_location);
  console.log(job_skills);
  console.log(job_qualification);
  console.log(job_languages);
  console.log(job_description);

  company_jobs.create(
  { 'company_id':company_id,
    'job_title':job_title,
    'job_location':job_location,
    'job_skills':job_skills,
    'job_qualification':job_qualification,
    'job_languages':job_languages,
    'job_description':job_description},
    function(err,val){
      console.log(err);
      console.log(val);
    }
    );

};
