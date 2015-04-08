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

var company_crud = crud(connection,'company_people');
//list company using crud
exports.getcompany=function(attrs,callback){
company_crud.load({}, function(err, val){
 callback.json(val);
});
};

exports.addcompany = function(attrs,callback){
  console.log('add company');

  var company_id = attrs.body.company_id;
  var people_id = attrs.body.people_id;
  var people_name = attrs.body.people_name;
  var people_designation = attrs.body.people_designation;
  var people_quotes = attrs.body.people_quotes;
  var people_profilepic = attrs.body.people_profilepic;
  var people_desc = attrs.body.people_desc;

  console.log(company_id);
  console.log(people_id);
  console.log(people_name);
  console.log(people_designation);
  console.log(people_quotes);
  console.log(people_profilepic);
  console.log(people_desc);

  company_crud.create(
  { 'company_id':company_id,
    'people_id':people_id,
    'people_name':people_name,
    'people_designation':people_designation,
    'people_quotes':people_quotes,
    'people_profilepic':people_profilepic,
    'people_desc':people_desc},
    function(err,val){
      console.log(val);
      console.log(err);
    }
    );

};
