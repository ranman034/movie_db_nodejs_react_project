var express = require('express');
var router = express.Router();

const API_KEY = '929d849dc5854872f86c428d0cbaa047';

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/', (req, res, next) => {

  const POPULAR_MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
});

module.exports = router;
