var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   'use strict';
//
//   res.send('respond with a resource');
// });

var express = require("express");
var router = express.Router({mergeParams:true});
var knex = require("../db/knex");

// Index
router.get('/', function(req, res){
  // we can left outer join for 1 query...but that doesn't seem worth it right now
  knex('gear').where({id:req.params.gear_id}).first().then(function(gear){
    res.render('gear/index', {gear: gear});
  });
});


// Show
router.get('/:id', function(req, res) {
  knex('gear').where({id: req.params.id}).first().then(function(gear){
    res.render('gear/show', {gear: gear});
  });
});



module.exports = router;
