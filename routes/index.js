var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/kau', function(req, res, next) {
  res.render('index', { title: 'apakah aku di ghosting?' });
});

module.exports = router;
