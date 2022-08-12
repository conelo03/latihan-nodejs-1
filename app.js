var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/list', (req, res) => {
  res.render('list');
});

app.listen(3000);