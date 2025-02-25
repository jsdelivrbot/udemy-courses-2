var express = require('express');
var router = express.Router({mergeParams: true});
var Campground = require('../models/campground');
var Comment = require('../models/comment');

// New Route
router.get('/new', isLoggedIn, function(req, res){
  // Find campground by ID
  Campground.findById(req.params.id, function(err, campground){
    if(err) {
      console.log(err);
    } else {
      res.render('comments/new', {campground: campground});
    }
  });
});

// Post Route
router.post("/", isLoggedIn, function(req, res){
  Campground.findById(req.params.id, function(err, campground){
    if(err) {
      console.log(err);
      res.redirect('/campgrounds');
    } else {
      Comment.create(req.body.comment, function(err, comment){
        if(err) {
          console.log(err);
        } else {
          // campgrounds refers to the passed-in var comment from .create
          campground.comments.push(comment);
          campground.save();
          res.redirect('/campgrounds/' + campground._id);
        }
      });
    }
  });
});

// middleware
function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

module.exports = router;
