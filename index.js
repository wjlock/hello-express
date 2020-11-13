const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('/about', function(req, res) {
    res.send('About Us');
});
app.listen(8000);