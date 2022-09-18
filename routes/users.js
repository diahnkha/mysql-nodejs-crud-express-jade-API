var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('hello world');
});

router.get('/me', function(req, res, next) {
  res.send('hi this is me!');
});

module.exports = router;
