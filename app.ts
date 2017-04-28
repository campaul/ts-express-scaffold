import * as express from 'express';

export function createApp() {
    var app = express();

    app.get('/', function (req, res) {
        res.send('Hello World!');
    });

    return app;
}

if (require.main === module) {
    createApp().listen(5000, function() {
        console.log('Running on port 5000...');
    });
}
