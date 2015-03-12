var express = require('express');
var app = express();

app.use(express.static('build'));

var server = app.listen(9999, function(){});

