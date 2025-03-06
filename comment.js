//create web server
const express = require('express');
const app = express();
const port = 3000;
//set up the view engine
app.set('view engine', 'ejs');
//set up the static file
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
const comment = [];
app.get('/', (req, res) => {
    res.render('index', { comment });
})
app.post('/add_comment', (req, res) => {
    comment.push(req.body.comment);
    res.redirect('/');
})
app.listen(port, () => {
    console.log(`Server is running on http://localhost