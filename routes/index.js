var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
  // res.json({a: 'a'})
});

router.post('/data', function(req, res, next) {
  // res.render('index');
  console.log('data');
  res.json({a: 'a'})
});

module.exports = router;
