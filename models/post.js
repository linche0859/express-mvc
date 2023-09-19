const { v4: uuidv4 } = require('uuid');

class PostModel {
  constructor() {
    const post = {
      id: uuidv4(),
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    };
    this.posts = [post];
  }
  getPosts() {
    return this.posts;
  }
  createPost(title, body) {
    const post = {
      id: uuidv4(),
      title,
      body,
    };
    this.posts.push(post);
    return post;
  }
}

module.exports = new PostModel();
