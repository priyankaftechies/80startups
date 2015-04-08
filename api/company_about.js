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
 var company_about = crud(connection,'company_about');
 //list company using crud
 exports.getabout=function(attrs,callback){
 company_about.load({}, function(err, val){
  callback.json(val);
 });
 };
 exports.addabout = function(attrs,callback){
   console.log('add company');

   var company_id = attrs.body.company_id;
   var company_deschead = attrs.body.company_deschead;
   var company_desc = attrs.body.company_desc;
   var company_missionhead = attrs.body.company_missionhead;
   var company_mission = attrs.body.company_mission;
   var company_otherhead = attrs.body.company_otherhead;
   var company_other = attrs.body.company_other;

   console.log(company_id);
   console.log(company_deschead);
   console.log(company_desc);
   console.log(company_missionhead);
   console.log(company_mission);
   console.log(company_otherhead);
   console.log(company_other);

   company_about.create(
   { 'company_id':company_id,
     'company_deschead':company_deschead,
     'company_desc':company_desc,
     'company_missionhead':company_missionhead,
     'company_mission':company_mission,
     'company_otherhead':company_otherhead,
     'company_other':company_other
     },
       function(err,val){
       console.log(val);
       console.log(err);
     }
     );

 };
