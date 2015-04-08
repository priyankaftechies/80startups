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

 var userlogin = crud(connection,'userlogin');
 //list company using crud
 exports.getlogin = function(attrs,callback){
 userlogin.load({}, function(err, val){
  callback.json(val);
 });
 };
 exports.addlogin = function(attrs,callback){
   console.log('add users');

   var user_id = attrs.body.user_id;
   var user_fname = attrs.body.user_fname;
   var user_lname = attrs.body.user_lname;
   var user_email = attrs.body.user_email;
   var user_mobileno = attrs.body.user_mobileno;
   var user_password = attrs.body.user_password;

   console.log(user_id);
   console.log(user_fname);
   console.log(user_lname);
   console.log(user_email);
   console.log(user_mobileno);
   console.log(user_password);


   userlogin.create(
   {  'user_id':user_id,
      'user_fname':user_fname,
      'user_lname':user_lname,
      'user_email':user_email,
      'user_mobileno':user_mobileno,
      'user_password':user_password
   },

     function(err,val){
       console.log(val);
       console.log(err);
     }
);
 };
