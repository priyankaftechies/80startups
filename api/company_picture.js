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

 var company_picture = crud(connection,'company_picture');
 //list company using crud
 exports.getpicture = function(attrs,callback){
 company_picture.load({}, function(err, val){
  callback.json(val);
 });
 };
 exports.addpicture = function(attrs,callback){
   console.log('add company picture');

   var company_id = attrs.body.company_id;

   console.log(company_id);


   company_picture.create(
   { 'company_id':company_id},

     function(err,val){
       console.log(val);
       console.log(err);
     }
);
 };
