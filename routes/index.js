var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/abc', function(req, res, next) {
  console.log('안녕');
  //res.send('hola');
  res.render('new')
});

module.exports = router




