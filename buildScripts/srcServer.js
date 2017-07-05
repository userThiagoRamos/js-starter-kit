import express from 'express';
import path from 'path';
import open from 'opn';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/books', function(req, res) {
    res.json([
        { title: 'One', sequence: 1, lessons: 'One' },
        { title: 'Two', sequence: 2, lessons: 'Two' },
        { title: 'Tow', sequence: 3, lessons: 'Three' }
    ]);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port + '/books', { app: 'chrome' });
    }
});