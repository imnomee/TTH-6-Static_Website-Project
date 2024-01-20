const express = require('express');
const app = express();
// const path = require('path'); //

/* Setup view engine */
app.set('views', __dirname + '/views'); //get the path for views folder/
app.set('view engine', 'pug'); //install pug and set view engine to pug

app.use('/static', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    console.log('root');
    res.render('about');
});

const port = process.env.port || 3000;
app.listen(port, (err) =>
    err
        ? console.log('something went wrong, err')
        : console.log('Server running on ', port)
);
