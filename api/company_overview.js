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

var company_overview = crud(connection,'company_overview');
//list company using crud
exports.getoverview=function(attrs,callback){
company_overview.load({}, function(err, val){
 callback.json(val);
});
};

exports.addoverview = function(attrs,callback){
  console.log('add company');

  var company_id = attrs.body.company_id;
  var company_name = attrs.body.company_name;
  var company_description = attrs.body.company_description;
  var latitude = attrs.body.latitude;
  var longitude = attrs.body.longitude;

  console.log(company_id);
  console.log(company_name);
  console.log(company_description);
  console.log(latitude);
  console.log(longitude);


  company_overview.create(
  { 'company_id':company_id,
    'company_name':company_name,
    'company_description':company_description,
    'latitude':latitude,
    'longitude':longitude},
    function(err,val){
      console.log(val);
      console.log(err);
    }
    );

};
