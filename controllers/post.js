const PostModel = require('../models/post');

exports.getPosts = (req, res) => {
  res.send(PostModel.getPosts());
};

exports.createPost = (req, res) => {
  const { title, body } = req.body;
  const post = PostModel.createPost(title, body);
  res.send(post);
};
