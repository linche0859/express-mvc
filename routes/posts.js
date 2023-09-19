const express = require('express');
const router = express.Router();
const PostController = require('../controllers/post');

router.get(
  '/',
  /* 	#swagger.tags = ['Post']
    #swagger.description = '取得全部的貼文' 
    #swagger.summary = '取得全部的貼文'
    */

  /* #swagger.responses[200] = { 
    schema: { "$ref": "#/definitions/Post" }
  } */
  PostController.getPosts
);

router.post(
  '/',
  /* #swagger.tags = ['Post']
    #swagger.description = '新增一則貼文' 
    #swagger.summary = '新增一則貼文'
    */

  /*	#swagger.parameters['obj'] = {
      in: 'body',
      description: 'Post information.',
      required: true,
      schema: {
        "title": "貼文標題",
        "body": "貼文內容"
      }
  } */

  /* #swagger.responses[200] = { 
    schema: { "$ref": "#/definitions/Post" }
  } */
  PostController.createPost
);

module.exports = router;
