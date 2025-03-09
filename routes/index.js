var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});


router.get('/signupx', function(req, res) {
  res.render('signupx');
});


router.get('/suggestion', function(req, res) {
  res.render('suggestion');
});








router.get('/home', function(req, res) {
  res.render('home');
});

router.get('/about', function(req, res) {
  res.render('about');
});

router.get('/signup', function(req, res) {
  res.render('signup');
});

router.get('/contact', function(req, res) {
  res.render('contact');
});

router.get('/Review', function(req, res) {
  res.render('Review');
});

router.get('/video', function(req, res) {
  res.render('video');
});


router.get('/services', function(req, res) {
  res.render('services');
});

module.exports = router;
