var http = require('http');
var mysql = require('mysql');
var express = require('express'), path = require('path');
var app = express();
var crud = require('mysql-crud');
//db connection details
var connection = mysql.createPool({
  host :'localhost',
  user : 'root',
  password : '',
	database : 'company',
 });

 var bodyParser = require('body-parser');
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({
   extended: true
 }));

var company_crud = crud(connection,'company_details');
//list company using crud
exports.getcompany=function(attrs,callback){
company_crud.load({}, function(err, val){
 callback.json(val);
});
};

exports.addcompany = function(attrs,callback){
  console.log('add company');

  var company_id = attrs.body.company_id;
  var job_id = attrs.body.job_id;
  var job_title = attrs.body.job_title;
  var job_location = attrs.body.job_location;
  var job_skills = attrs.body.job_skills;
  var job_studies = attrs.body.job_studies;
  var job_languages = attrs.body.job_languages;
  var job_description = attrs.body.job_description;
  console.log(company_id);
  console.log(job_id);
  console.log(job_title);
  console.log(job_location);
  console.log(job_skills);
  console.log(job_studies);
  console.log(job_languages);
  console.log(job_description);
};
