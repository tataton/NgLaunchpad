var router = require('express').Router();

var allReviews = [];

router.get('/', function (req, res){
  console.log('Connecting to allReviews from GET route.');
  res.send(allReviews);
});

router.post('/', function (req, res) {
  console.log(req.body);
  var submittedReview = req.body;
  res.send(submittedReview);
});

module.exports = router;
