//create web server
const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const comments = require('./comments.json');

//middleware
app.use(cors());
app.use(bodyParser.json());

//GET request to /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

//POST request to /comments
app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  fs.writeFileSync('./comments.json', JSON.stringify(comments));
  res.json(newComment);
});

//DELETE request to /comments
app.delete('/comments/:id', (req, res) => {
  const { id } = req.params;
  const comment = comments.find((comment) => comment.id == id);
  if (!comment) {
    res.status(404).json({ error: 'Comment not found' });
    return;
  }
  comments = comments.filter((comment) => comment.id != id);
  fs.writeFileSync('./comments.json', JSON.stringify(comments));
  res.json({ success: 'Comment deleted' });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});