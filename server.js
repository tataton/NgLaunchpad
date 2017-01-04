var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(express.static('public'));
var urlEncodedParser = bodyParser.urlencoded({extended: true});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/public', '/views', 'index.html'));
});

app.post('/reviews', urlEncodedParser, function (req, res){
  console.log(req.body);
  var submittedReview = req.body;
  res.send(submittedReview);
});

app.listen(8080, function(){
  console.log('Now listening on port 8080.');
});
