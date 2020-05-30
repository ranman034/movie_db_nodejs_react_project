const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const API_KEY = '<Insert API_KEY Here';
const MOVIE_DB_API_BASE = 'https://api.themoviedb.org/3/';

const appendQueries = (url, query) => {
  let newUrl = url;
  Object.keys(query).forEach(key => {
    newUrl = newUrl.concat(`&${key}=${query[key]}`);
  });
  return newUrl;
}

router.get('/', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  const POPULAR_MOVIES_API_URL_BASE = `${MOVIE_DB_API_BASE}movie/popular?api_key=${API_KEY}`;
  const {
    query = {}
  } = req;

  const apiUrl = appendQueries(POPULAR_MOVIES_API_URL_BASE, query);

  fetch(apiUrl).then(
    res => res.json()
  ).then(data => {
    const {
      results = {}
    } = data;
    res.send(results);
  }).catch(err => {
    res.redirect('/error');
  });
});

router.get('/search/movies', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  const SEARCH_MOVIE_API_URL_BASE = `${MOVIE_DB_API_BASE}search/movie?api_key=${API_KEY}`;
  const {
    query = {}
  } = req;

  const apiUrl = appendQueries(SEARCH_MOVIE_API_URL_BASE, query);

  fetch(apiUrl).then(
    res => res.json()
  ).then(data => {
    const {
      results = {}
    } = data;
    res.send(results);
  }).catch(err => {
    res.redirect('/error');
  });
});

router.get('/movie/details', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  const {
    query
  } = req;
  const MOVIE_DETAILS_API_URL = `${MOVIE_DB_API_BASE}movie/${query.movieId}?api_key=${API_KEY}`;

  fetch(MOVIE_DETAILS_API_URL).then(
    res => res.json()
  ).then(data => {
    res.send(data);
  }).catch(err => {
    res.redirect('/error');
  });
});

router.get('/error', (req, res, next) => {
  res.send('Error fetching movie api data');
});

module.exports = router;
