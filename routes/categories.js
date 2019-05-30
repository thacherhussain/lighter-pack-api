var express = require("express");
var router = express.Router();
var knex = require("../db/knex");
// Index
router.get('/', function(req, res){
  knex('categories').then(function(categories){
    res.render('categories/index', {categories: categories});
  });
});

// Show
// router.get('/:id', function(req, res) {
//   knex('categories').where({id: req.params.id}).first().then(function(category){
//       knex.raw("SELECT books.title,books.genre FROM books_categories INNER JOIN books ON books.id = books_categories.book_id WHERE category_id=?;",req.params.id)
//       .then(function(data){
//         res.render('categories/show', {category:category, books: data.rows});
//       }).catch(function(err){
//         console.log("ERRORS!",err);
//       });
//   });
// });

module.exports = router;
