var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  
  /* 1. Renderización de la vista crud.ejs */
  res.render('crud');
});

module.exports = router;
