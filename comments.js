//create web server
const express = require('express');
const app = express();
const commentController = require('./controllers/comments');

//Handle request
express.Router.get('/', commentController.comment_list);
express.Router.post('/', commentController.comment_create);
express.Router.put('/:id', commentController.comment_update);
express.Router.delete('/:id', commentController.comment_delete);

//Start server
app.listen(3000, () => {
    console.log('Server is running');
});