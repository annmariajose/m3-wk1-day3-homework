var express = require('express');
var path = require('path');
var app = express();

app.get('/components', function(req, res) {
    res.render('content');
});

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');

app.listen(3000);