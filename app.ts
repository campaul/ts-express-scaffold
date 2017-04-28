import * as express from 'express';
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(5000, function() {
    console.log('Running on port 5000...');
});
