var express = require('express');
var router = express.Router();

const { VARIABLE } = process.env;

/* GET home page. */
router.get('/', function (req, res, next) {
  // #swagger.ignore = true
  res.render('index', { title: 'Express', VARIABLE });
});

module.exports = router;
